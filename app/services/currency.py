import requests
from typing import Dict

class CurrencyService:
    def __init__(self):
        self.base_url = "https://api.frankfurter.app"

    def get_rate(self, base: str, target: str) -> float:
        try:
            url = f"{self.base_url}/latest?from={base}&to={target}"
            res = requests.get(url).json()
            return res["rates"][target]
        except Exception:
            return 80.0 if target == "INR" else 1.0

    def convert(self, amount: float, base: str, target: str) -> float:
        rate = self.get_rate(base, target)
        return round(amount * rate, 2)

    def rates(self, base: str = "USD") -> Dict[str, float]:
        try:
            url = f"{self.base_url}/latest?from={base}"
            res = requests.get(url).json()
            return res["rates"]
        except Exception:
            return {"INR": 80.0, "EUR": 0.9, "GBP": 0.8}