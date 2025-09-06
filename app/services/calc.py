
from app.models import CostBreakdown
class CalculatorService:
    def add(self, a: float, b: float) -> float:
        return a + b

    def multiply(self, a: float, b: float) -> float:
        return a * b

    def calculate_total_cost(self, costs: CostBreakdown) -> float:
        total = (
            costs.hotel
            + costs.food
            + costs.transport
            + costs.activities
        )
        costs.total = total
        return total

    def daily_budget(self, total_cost: float, days: int, adults: int) -> float:
        if days <= 0 or adults <= 0:
            return 0.0
        return round(total_cost / (days * adults), 2)
