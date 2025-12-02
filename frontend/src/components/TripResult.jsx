import React from 'react';
import { MapPin, Calendar, DollarSign, Sun, Utensils, Camera, Hotel } from 'lucide-react';
import ItineraryView from './ItineraryView';

const TripResult = ({ plan }) => {
    if (!plan) return null;

    const { request, weather_current, hotels, costs, summary } = plan;

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Hero Summary */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Trip to {request.city}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <Sun className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="text-gray-500 text-sm font-medium">Weather</span>
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                            {weather_current?.temperature}°C
                        </p>
                        <p className="text-gray-500 capitalize">{weather_current?.description}</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                <DollarSign className="w-5 h-5 text-emerald-500" />
                            </div>
                            <span className="text-gray-500 text-sm font-medium">Estimated Cost</span>
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                            ${costs?.total?.toLocaleString()}
                        </p>
                        <p className="text-gray-500 text-sm">Total for {request.adults} travelers</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <Hotel className="w-5 h-5 text-purple-500" />
                            </div>
                            <span className="text-gray-500 text-sm font-medium">Accommodation</span>
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                            ${costs?.hotel?.toLocaleString()}
                        </p>
                        <p className="text-gray-500 text-sm">Est. hotel budget</p>
                    </div>
                </div>
            </div>

            {/* Itinerary */}
            <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    Daily Itinerary
                </h3>
                <ItineraryView itinerary={plan.itinerary} />
            </div>

            {/* Hotels */}
            <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                    <Hotel className="w-6 h-6 text-purple-600" />
                    Recommended Hotels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hotels?.map((hotel, index) => (
                        <div key={index} className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 transition-colors group shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{hotel.name}</h4>
                                <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                                    {hotel.rating} ★
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {hotel.location}
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                <span className="text-gray-500 text-sm">Price per night</span>
                                <span className="text-emerald-600 font-semibold">${hotel.price_per_night}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripResult;
