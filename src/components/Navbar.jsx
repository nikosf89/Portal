import { useState } from "react";
import { BiDownArrowAlt } from 'react-icons/bi'

function Navbar({ toggleMenu, isGreek, setIsGreek }) {

    return (
        <div className="sticky top-0 md:w-auto z-10">
            <div className="flex items-center justify-between p-0 bg-white max-h-20">
                <div className="sm:hidden">
                    <button
                        id="menu-toggle"
                        className="text-2xl text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <img
                            src="img/mobilehamburgermajor-svgrepo-com.svg"
                            alt="menu-hamburger"
                            className="w-8 h-8"
                        />
                    </button>
                </div>

                <p className="p-1 text-sm sm:p-2 sm:text-lg md:text-2xl">
                    {isGreek ? "ΤΕΑΑΠΛ": "TEAAPL"}
                </p>

                <div className="flex items-center p-2 ">
                    <span onClick={setIsGreek} className="cursor-pointer">
                        {isGreek ? (
                            <div style={{ position: "relative" }}>
                                <img
                                    src="img/flag-for-greece-svgrepo-com.svg"
                                    alt="flag-for-greece"
                                    className="transition ease-in-out hover:scale-125 w-6 h-6 md:p-2 md:w-12 md:h-12"
                                />
                                
                            </div>
                        ) : (
                            <div style={{ position: "relative" }}>
                                <img
                                    src="img/flag-for-united-kingdom-svgrepo-com.svg"
                                    alt="flag-for-greece"
                                    className="transition ease-in-out hover:scale-125 w-6 h-6 md:p-2 md:w-12 md:h-12"
                                />
                                
                            </div>
                        )}
                    </span>
                    {/* Rest of your code */}
                    <div className="flex items-center p-1 border-l sm:p-2 ">
                        <p className="p-1 text-sm sm:p-2 md:text-base">
                            {isGreek ? "Όνομα Ασφαλισμένου": "Member Name"}
                           
                        </p>

                        <img
                            src="img/person-circle-svgrepo-com.svg"
                            alt="person-circle"
                            className="w-6 h-6 md:p-2 md:w-12 md:h-12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
