from typing import List
from app.models import ItineraryItem, TripPlan


class ItineraryService:
    def create_day_plan(self, day: int, plan: TripPlan) -> ItineraryItem:
        """
        Creates a simple day plan by rotating through attractions, activities, and restaurants.
        """
        activities = []

        if plan.attractions and len(plan.attractions) >= day:
            activities.append(f"Visit: {plan.attractions[day - 1].name}")

        if plan.activities and len(plan.activities) >= day:
            activities.append(f"Do: {plan.activities[day - 1].name}")

        if plan.restaurants and len(plan.restaurants) >= day:
            activities.append(f"Dine at: {plan.restaurants[day - 1].name}")

        if not activities:
            activities = [f"Free exploration day {day}"]

        return ItineraryItem(day=day, activities=activities)

    def create_full_itinerary(self, plan: TripPlan) -> List[ItineraryItem]:
        """
        Generates an itinerary for all days in the trip.
        """
        itinerary = []
        for day in range(1, plan.request.days + 1):
            itinerary.append(self.create_day_plan(day, plan))
        return itinerary
