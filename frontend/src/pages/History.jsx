import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

const History = () => {
    // Mock data for history
    const trips = [
        {
            id: 1,
            destination: 'Tokyo, Japan',
            date: '2024-03-15',
            duration: '7 days',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
        },
        {
            id: 2,
            destination: 'Paris, France',
            date: '2023-11-20',
            duration: '5 days',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Your Trip History
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Relive your past adventures and plan new ones.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {trips.map((trip) => (
                    <div key={trip.id} className="glass-panel overflow-hidden rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1">
                        <div className="h-48 w-full relative">
                            <img
                                src={trip.image}
                                alt={trip.destination}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">{trip.destination}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{trip.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{trip.duration}</span>
                                </div>
                            </div>
                            <button className="w-full btn-primary py-2 text-sm">
                                View Itinerary
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
