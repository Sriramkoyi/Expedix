from pydantic import BaseModel
from typing import List, Optional,Dict

class TripRequest(BaseModel):
    city: str
    country: str
    days:str
    adults: str
    currency:str="USD"

class WeatherInfo(BaseModel):
    description: str
    temperature: float
    humidity: int
    wind_speed: float

class Attraction(BaseModel):
    name: str
    category: str
    description: Optional[str] = None

class HotelOption(BaseModel):
    name: str
    price_per_night: float
    rating: float
    location: str

class ItineraryItem(BaseModel):
    day: int
    activities: List[str]

class CostBreakdown(BaseModel):
    hotel: float = 0
    food: float = 0
    transport: float = 0
    activities: float = 0
    total: float = 0

class TripPlan(BaseModel):
    request: TripRequest
    weather_current: Optional[WeatherInfo] = None
    weather_forecast: Optional[List[WeatherInfo]] = None
    attractions: Optional[List[Attraction]] = None
    restaurants: Optional[List[Attraction]] = None
    activities: Optional[List[Attraction]] = None
    hotels: Optional[List[HotelOption]] = None
    hotel_cost: Optional[float] = None
    costs: Optional[CostBreakdown] = None
    itinerary: Optional[List[ItineraryItem]] = None
    summary: Optional[str] = None