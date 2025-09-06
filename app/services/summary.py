from app.models import TripPlan
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI


class SummaryService:
    def __init__(self, model_name: str = "gemini-1.5-pro"):
        """
        Initialize Gemini LLM for generating summaries.
        """
        self.llm = ChatGoogleGenerativeAI(model=model_name, temperature=0.7)

        self.prompt = PromptTemplate.from_template("""
        You are a friendly and professional AI travel agent.
        Based on the following trip details, generate a natural, engaging trip summary.

        Trip Details:
        - City: {city}, {country}
        - Duration: {days} days
        - Travelers: {adults} people
        - Currency: {currency}

        Weather:
        {weather}

        Attractions:
        {attractions}

        Restaurants:
        {restaurants}

        Hotel Cost: {hotel_cost}
        Total Estimated Cost: {total_cost}

        Itinerary:
        {itinerary}

        ---
        Write a warm, concise, and helpful summary for the traveler.
        """)

    def summarize(self, plan: TripPlan) -> str:
        """
        Use Gemini LLM to generate a trip summary.
        """
        req = plan.request

        weather = (
            f"{plan.weather_current.description}, {plan.weather_current.temperature}°C"
            if plan.weather_current else "Not available"
        )

        attractions = ", ".join(a.name for a in plan.attractions[:3]) if plan.attractions else "Not available"
        restaurants = ", ".join(r.name for r in plan.restaurants[:2]) if plan.restaurants else "Not available"
        itinerary_preview = "\n".join(
            f"Day {item.day}: {', '.join(item.activities)}"
            for item in plan.itinerary[:2]
        ) if plan.itinerary else "Not available"

        prompt_text = self.prompt.format(
            city=req.city,
            country=req.country,
            days=req.days,
            adults=req.adults,
            currency=req.currency,
            weather=weather,
            attractions=attractions,
            restaurants=restaurants,
            hotel_cost=plan.hotel_cost or "Not available",
            total_cost=plan.costs.total if plan.costs else "Not available",
            itinerary=itinerary_preview
        )

        response = self.llm.invoke(prompt_text)
        return response.content