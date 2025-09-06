from typing import List, Dict
from app.models import HotelOption

class HotelService:
    def search(self, city: str, days: int, adults: int) -> List[HotelOption]:
        """
        Mock hotel search results.
        Can be extended to call Booking.com, Expedia, etc.
        """
        return [
            HotelOption(name="Grand Palace Hotel", price_per_night=120, rating=4.5, location=f"{city} Center"),
            HotelOption(name="Budget Inn", price_per_night=60, rating=3.8, location=f"{city} Downtown"),
            HotelOption(name="Luxury Suites", price_per_night=200, rating=4.9, location=f"{city} Beachside"),
        ]
    def estimate(self, hotels: List[HotelOption], days: int, adults: int) -> float:
        """
        Estimate total hotel cost for the first hotel option.
        """
        if not hotels:
            return 0.0
        return hotels[0].price_per_night * days * adults
    
    def budget_range(self, hotels: List[HotelOption], days: int, adults: int) -> Dict[str, float]:
        """
        Provide a min and max budget range across all hotel options.
        """
        if not hotels:
            return {"min": 0, "max": 0}
        prices = [h.price_per_night for h in hotels]
        return {
            "min": min(prices) * days * adults,
            "max": max(prices) * days * adults,
        }