import React from 'react';
import { Clock } from 'lucide-react';

const ItineraryView = ({ itinerary }) => {
    if (!itinerary) return null;

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Daily Itinerary</h3>
            <div className="space-y-4">
                {itinerary.map((dayItem, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg text-blue-600 mb-2">Day {dayItem.day}</h4>
                        <ul className="space-y-2">
                            {dayItem.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="flex items-start gap-2 text-gray-700">
                                    <Clock className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                                    <span>{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItineraryView;
