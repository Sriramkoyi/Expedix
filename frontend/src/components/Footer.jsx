import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Expedix
                        </span>
                        <p className="mt-4 text-gray-400 text-sm">
                            Making travel planning effortless and personalized for everyone.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Features</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Destinations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Expedix. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
