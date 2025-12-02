import React from "react";

const Hero = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid fixes overlap */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

                    {/* LEFT SECTION */}
                    <div className="py-12 lg:py-24">
                        <span className="block text-blue-600 font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">Expedix</span>
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Plan your dream trip</span>{" "}
                            <span className="block text-blue-600 xl:inline">in seconds</span>
                        </h1>

                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:text-xl">
                            Experience the future of travel planning with Expedix. Our AI-powered platform
                            creates personalized itineraries tailored to your preferences, budget, and style.
                        </p>

                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                            <a
                                href="#planner"
                                className="w-full sm:w-auto px-8 py-3 md:py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium shadow-lg hover:shadow-blue-500/30 transition"
                            >
                                Start Planning
                            </a>

                            <a
                                href="#demo"
                                className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-8 py-3 md:py-4 text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md font-medium transition"
                            >
                                View Demo
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2021&q=80"
                            alt="Travel"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
