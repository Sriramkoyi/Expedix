import os
import requests
from typing import List
from app.models import Attraction

class AttractionsService:
    def __init__(self):
        self.api_key = os.getenv("OPENTRIPMAP_API_KEY")
        self.base_url = "https://api.opentripmap.com/0.1/en/places"
    def _fetch(self, city: str, kinds: str) -> List[Attraction]:
        if not self.api_key:
            if kinds == "interesting_places":
                return [
                    Attraction(name="Central Park", category="Park", description="Large urban park."),
                    Attraction(name="City Museum", category="Museum", description="Popular history museum."),
                ]
            elif kinds == "foods":
                return [
                    Attraction(name="Olive Garden", category="Restaurant", description="Italian-American food."),
                    Attraction(name="Sushi Zen", category="Restaurant", description="Fresh sushi and ramen."),
                ]
            elif kinds == "cultural":
                return [
                    Attraction(name="Theater Square", category="Activity", description="Performing arts shows."),
                    Attraction(name="City Walk", category="Activity", description="Guided walking tour."),
                ]
            return []
        url = f"{self.base_url}/autosuggest"
        params = {
            "apikey": self.api_key,
            "name": city,
            "kinds": kinds,
            "limit": 5,
        }
        res = requests.get(url, params=params).json()

        attractions = []
        for item in res.get("features", []):
            props = item.get("properties", {})
            attractions.append(
                Attraction(
                    name=props.get("name", "Unknown"),
                    category=kinds,
                    description=props.get("wikidata", ""),
                )
            )
        return attractions
    
    def search(self, city: str) -> List[Attraction]:
        """Top attractions"""
        return self._fetch(city, "interesting_places")
    
    def restaurants(self, city: str) -> List[Attraction]:
        """Popular restaurants"""
        return self._fetch(city, "foods")
    
    def activities(self, city: str) -> List[Attraction]:
        """Cultural/entertainment activities"""
        return self._fetch(city, "cultural")
