import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const TripForm = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState({
        city: '',
        country: '',
        days: 3,
        adults: 2,
        currency: 'USD'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'days' || name === 'adults' ? parseInt(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 ml-1">City</label>
                    <div className="relative group">
                        <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="e.g. Tokyo"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 ml-1">Country</label>
                    <div className="relative group">
                        <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="e.g. Japan"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 ml-1">Duration (Days)</label>
                    <div className="relative group">
                        <Calendar className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="number"
                            name="days"
                            value={formData.days}
                            onChange={handleChange}
                            min="1"
                            required
                            className="input-field"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 ml-1">Travelers</label>
                    <div className="relative group">
                        <Users className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            min="1"
                            required
                            className="input-field"
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-primary mt-4 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Crafting Itinerary...</span>
                    </>
                ) : (
                    'Generate Trip Plan'
                )}
            </button>
        </form>
    );
};

export default TripForm;
