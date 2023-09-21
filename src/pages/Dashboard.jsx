function Dashboard({isGreek}) {
    return (
        <main>
            <div className="p-4 ">
                <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                    <img
                        src="img/speedometer-svgrepo-com.svg"
                        alt="speedometer"
                        className="w-12 h-12 "
                    />

                    <p className="px-2 text-2xl">Dashboard</p>
                </div>

                <div className="grid grid-cols-1 grid-rows-6 gap-2 sm:grid-cols-2 sm:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 xl:gap-4">
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 xl:col-start-1 xl:col-end-5 xl:row-start-1 xl:row-end-2">
                        <div className="p-4 m-1 bg-white border-l-4 rounded-lg shadow-lg border-custom-new-blue max-h-40">
                            <div className="flex">
                                <img
                                    src="img/person-svgrepo-com.svg"
                                    alt="person"
                                    className="w-16  md:w-32 "
                                />

                                <div>
                                    <p className="p-2 text-custom-new-blue ">
                                        {isGreek ? "Όνομα Ασφαλισμένου:" : "Member Name"}
                                        <span> {isGreek ? "Στοιχεία:" : "Details"} </span>{" "}
                                    </p>

                                    <p className="p-2 text-custom-new-blue">
                                    {isGreek ? "ΑΜ Ασφαλισμένου:" : "Member ID"}  <span>{isGreek ? "Στοιχεία:" : "Details"} </span>{" "}
                                    </p>

                                    <p className="p-2 text-custom-new-blue">
                                    {isGreek ? "Ημ. Εγγραφής:" : "Entry Date"} <span> {isGreek ? "Στοιχεία:" : "Details"}</span>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 ">
                        <div className="grid w-full h-full grid-cols-3 p-2 bg-white border-l-4 rounded-lg shadow-lg border-custom-new-blue max-h-40">
                            <div className="flex flex-col col-span-2">
                                <p className="p-2 text-custom-new-blue">
                                    {isGreek ? "Σύνολο Ατομικού Λογαριασμού":  "Member Account Balance"}
                                </p>

                                <p className="p-1 ">{isGreek ? "Όνομα Ασφ. ή οτδ:" : "Some Information"}</p>
                            </div>

                            <div className="flex items-center justify-center col-span-1">
                                <img
                                    src="img/chart-line-up-svgrepo-com.svg"
                                    alt="line-up"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3 ">
                        <div className="grid w-full h-full grid-cols-3 p-2 bg-white border-l-4 border-red-600 rounded-lg shadow-lg max-h-40">
                            <div className="flex flex-col col-span-2">
                                <p className="p-2 text-red-600">
                                    {isGreek ? "Οφειλόμενη Ποσό" : "Due Contribution Amount"}
                                    
                                </p>

                                <p className="p-1 ">
                                {isGreek ? "Όνομα Ασφ. ή οτδ:" : "Some Information"}
                                </p>
                            </div>

                            <div className="flex items-center justify-center col-span-1">
                                <img
                                    src="img/scale-weight-weights-scales-balance-svgrepo-com.svg"
                                    alt="scale-weight"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-4 row-end-5 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 ">
                        <div className="grid w-full h-full grid-cols-3 p-2 bg-white border-l-4 rounded-lg shadow-lg max-h-40 border-cyan-400">
                            <div className="flex flex-col col-span-2">
                                <h2 className="p-2 text-cyan-400">{isGreek? "Χρήστες" : "Users"}</h2>

                                <p className="p-1 ">
                                    {isGreek ? "Σύνολο:" : "Details"} <span>{isGreek? "Στοιχεία" : "Details"} </span>{" "}
                                </p>

                                <p className="p-1 ">
                                    {isGreek? "Μη επιβεβαιωμένοι χρήστες:" : "Unconfirmed users:"}
                                    <span>{isGreek? "Στοιχεία" : "Details"} </span>
                                </p>
                            </div>

                            <div className="flex items-center justify-center col-span-1">
                                <img
                                    src="img/user-group-svgrepo-com.svg"
                                    alt="user-group"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-5 row-end-6 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3 ">
                        <div className="grid w-full h-full grid-cols-3 p-2 bg-white border-l-4 rounded-lg shadow-lg max-h-40 border-cyan-400">
                            <div className="flex flex-col col-span-2">
                                <h2 className="p-2 text-cyan-400">
                                    {isGreek ? "Ασφαλισμένοι" : "Members"}
                                </h2>

                                <p className="p-1 ">
                                    {isGreek? "Σύνολο:" : "Total"} <span>{isGreek? "Στοιχεία" : "Details"} </span>
                                </p>

                                <p className="p-1">
                                    {isGreek? "Ενεργοί:" : "Active"} <span>{isGreek? "Στοιχεία" : "Details"} </span>
                                </p>

                                <p className="p-1">
                                    {isGreek? "Διεγραμμένοι::" : "Deleted"} <span>{isGreek? "Στοιχεία" : "Details"} </span>
                                </p>
                            </div>

                            <div className="flex items-center justify-center col-span-1">
                                <img
                                    src="img/user-group-svgrepo-com.svg"
                                    alt="user-group"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-6 row-end-7 sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5 xl:col-start-1 xl:col-end-3 xl:row-start-3 xl:row-end-4 ">
                        <div className="grid w-full h-full grid-rows-3 border-l-4 rounded-lg shadow-lg border-custom-new-blue max-h-40 ">
                            <div className="flex justify-between row-span-1 bg-gray-100 border-b-2 rounded-lg shadow-lg">
                                <h2 className="p-4 text-custom-new-blue">
                                    {isGreek ? "Ανάλυση Οφειλής" : "Debt Analysis"}
                                </h2>

                                <p className="p-4 text-custom-new-blue">
                                    220 &euro;
                                </p>
                            </div>

                            <div className="flex items-center justify-between flex-grow row-span-2 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col justify-center p-4">
                                    <p className="pt-2 pl-1 text-lg">
                                        {isGreek ? "Ασφαλισμένος" : "Insured"}
                                    </p>

                                    <p className="pb-2 pl-1 text-sm">
                                       {isGreek ? "Κωδικός Πληρωμής" : "Payment Code"} 
                                    </p>
                                </div>

                                <p className="p-4">{isGreek ? "Στοιχεία" : "Details"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
