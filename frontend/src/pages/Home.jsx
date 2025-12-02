import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';
import TripForm from '../components/TripForm';
import TripResult from '../components/TripResult';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTripSubmit = async (formData) => {
        setLoading(true);
        setError(null);
        setPlan(null);

        try {
            const response = await axios.post('http://localhost:8000/api/plan', formData);
            setPlan(response.data);
            // Scroll to result
            setTimeout(() => {
                document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } catch (err) {
            console.error("Error generating plan:", err);
            setError("Failed to generate trip plan. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setPlan(null);
        setError(null);
    };

    return (
        <>
            {!plan && <Hero />}

            <main className="container mx-auto px-4 py-12 max-w-5xl" id="planner">
                {error && (
                    <div className="bg-red-50 border-l-4 border-l-red-500 text-red-700 p-4 mb-8 rounded-r-xl flex items-center gap-3 animate-fade-in-up">
                        <div className="p-2 bg-red-100 rounded-full">
                            <span className="text-xl">⚠️</span>
                        </div>
                        <p>{error}</p>
                    </div>
                )}

                {!plan ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span>Powered by Gemini AI</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Start Your Journey
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tell us your preferences and let our AI craft the perfect itinerary for you.
                            </p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <TripForm onSubmit={handleTripSubmit} isLoading={loading} />
                        </div>

                        <Features />
                    </>
                ) : (
                    <div className="animate-fade-in-up" id="result">
                        <button
                            onClick={handleReset}
                            className="mb-8 text-gray-500 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                            Plan Another Trip
                        </button>
                        <TripResult plan={plan} />
                    </div>
                )}
            </main>
        </>
    );
};

export default Home;
