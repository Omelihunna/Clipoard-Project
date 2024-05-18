import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-darkGrayishBlue p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl">OmzyClip</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <div className="flex">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Home
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
