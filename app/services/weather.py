import os
import requests
from typing import List
from app.models import WeatherInfo

class WeatherService:
    def __init__(self):
        self.api_key = os.getenv("OPENWEATHER_API_KEY")
        self.base_url = "https://api.openweathermap.org/data/2.5"
    def get_current(self, city: str, country: str) -> WeatherInfo:
            if not self.api_key:
                return WeatherInfo(
                    description="Clear sky",
                    temperature=28.5,
                    humidity=55,
                    wind_speed=3.2,
                )

            url = f"{self.base_url}/weather?q={city},{country}&appid={self.api_key}&units=metric"
            res = requests.get(url).json()

            return WeatherInfo(
                description=res["weather"][0]["description"],
                temperature=res["main"]["temp"],
                humidity=res["main"]["humidity"],
                wind_speed=res["wind"]["speed"],
            )
    def get_forecast(self, city: str, country: str) -> List[WeatherInfo]:
        if not self.api_key:
            return [
                WeatherInfo(description="Sunny", temperature=30, humidity=50, wind_speed=2.5),
                WeatherInfo(description="Cloudy", temperature=27, humidity=60, wind_speed=3.0),
                WeatherInfo(description="Rainy", temperature=25, humidity=70, wind_speed=4.0),
            ]
        url = f"{self.base_url}/forecast?q={city},{country}&appid={self.api_key}&units=metric"
        res = requests.get(url).json()
        forecasts = []
        for item in res["list"][:3]:
            forecasts.append(
                WeatherInfo(
                    description=item["weather"][0]["description"],
                    temperature=item["main"]["temp"],
                    humidity=item["main"]["humidity"],
                    wind_speed=item["wind"]["speed"],
                )
            )
        return forecasts