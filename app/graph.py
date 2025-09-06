from langgraph.graph import StateGraph, END
from app.models import TripRequest, TripPlan, CostBreakdown
from app.services import (
    WeatherService,
    AttractionsService,
    HotelService,
    CalculatorService,
    ItineraryService,
    SummaryService,
)
class TripState(dict):
    request: TripRequest
    plan: TripPlan

weather_service = WeatherService()
attraction_service = AttractionService()
hotel_service = HotelService()
calc_service = CalculatorService()
itinerary_service = ItineraryService()
summary_service = SummaryService(model_name="gemini-1.5-pro")

def fetch_weather(state: TripState):
    plan = state["plan"]
    req = state["request"]
    plan.weather_current = weather_service.get_current_weather(req.city, req.country)
    return state

def fetch_attractions(state: TripState):
    plan = state["plan"]
    req = state["request"]
    plan.attractions = attraction_service.get_attractions(req.city)
    plan.restaurants = attraction_service.get_restaurants(req.city)
    plan.activities = attraction_service.get_activities(req.city)
    return state

def fetch_hotels(state: TripState):
    plan = state["plan"]
    req = state["request"]
    plan.hotel_cost = hotel_service.estimate_cost(
        city=req.city, days=req.days, adults=req.adults
    )
    return state

def calculate_costs(state: TripState):
    plan = state["plan"]
    req = state["request"]
    costs = CostBreakdown(
        hotel=plan.hotel_cost,
        food=req.days * req.adults * 20,       
        transport=req.days * 15,                
        activities=len(plan.activities) * 30 if plan.activities else 0,
    )
    calc_service.calculate_total_cost(costs)
    plan.costs = costs
    return state

def build_itinerary(state: TripState):
    plan = state["plan"]
    req = state["request"]
    plan.itinerary = itinerary_service.create_itinerary(plan, req.days)
    return state

def generate_summary(state: TripState):
    plan = state["plan"]
    plan.summary = summary_service.summarize(plan)
    return state

def create_trip_graph():
    graph = StateGraph(TripState)

    graph.add_node("weather", fetch_weather)
    graph.add_node("attractions", fetch_attractions)
    graph.add_node("hotels", fetch_hotels)
    graph.add_node("costs", calculate_costs)
    graph.add_node("itinerary", build_itinerary)
    graph.add_node("summary", generate_summary)

    graph.set_entry_point("weather")
    graph.add_edge("weather", "attractions")
    graph.add_edge("attractions", "hotels")
    graph.add_edge("hotels", "costs")
    graph.add_edge("costs", "itinerary")
    graph.add_edge("itinerary", "summary")
    graph.add_edge("summary", END)

    return graph.compile()
