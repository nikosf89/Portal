import { NavLink } from "react-router-dom";
import { useState } from "react";

function Aside({ hideMenu, isGreek }) {
    return (
        <>
            {hideMenu || (
                <aside   className=" md:h-screen md:sticky md:top-0 bg-custom-new-blue text-white transition-transform duration-1000 transform sm:block md:w-56 ">
                    <div className="p-4 text-base font-semibold border-b sm:block lg:text-lg xl:text-2xl">
                       {isGreek ? " Portal Ασφαλισμένου" : "Member Portal"}
                    </div>
                    <ul className="flex flex-col p-2 text-sm sm:border-b sm:flex-row md:flex-col lg:text-base 2xl:text-lg">
                        <li className=" px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-tachometer text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold  " : ""
                                    }>
                                    Dashboard
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-user text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }
                                    to={"/prosopika"}>
                                    {isGreek ? "Στοιχεία Ασφαλισμένου" : "Member Info"}
                                    
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-balance-scale text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    to={"/eisfores"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }>
                                        {isGreek ? "Εισφορές" : "Contributions"}
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-calculator text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    to={"/atomikos"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }>
                                    {isGreek ? "Ατομικός λογαριασμός" : "Personal Account"}
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-file text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    to={"/eggrafa"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }>
                                    {isGreek ? "Έγγραφα" : "Documents"}
                                </NavLink>
                            </span>
                        </li>
                    </ul>

                    <div className="p-2 text-xs font-semibold md:p-4 2xl:text-sm text-start">
                        {isGreek ? "ΔΙΑΧΕΙΡΙΣΤΗΣ": "Administrator"}    
                    </div>
                    <ul className="flex flex-col p-2 text-sm sm:border-b sm:flex-row md:flex-col lg:text-base 2xl:text-lg">
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-users text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }
                                    to={"/members"}>
                                    {isGreek ? "Ασφαλισμένοι": "Members"}   
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-users text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "font-bold  " : ""
                                    }
                                    to={"/users"}>
                                    {isGreek ? "Χρήστες": "Users"} 
                                </NavLink>
                            </span>
                        </li>
                        <li className="px-1 py-2 hover:bg-blue-300">
                            <span className="flex items-center">
                            <i className="fa fa-history text-slate-300 group-hover:text-white px-1"
                            aria-hidden="true"></i>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "font-bold " : ""
                                    }
                                    to={"/istoriko"}>
                                    {isGreek ? "Ιστορικό Ενεργειών": "Action History"}
                                    
                                </NavLink>
                            </span>
                        </li>
                    </ul>
                </aside>
            )}
        </>
    );
}

export default Aside;
