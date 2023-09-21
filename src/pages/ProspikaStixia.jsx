import { BsFillPersonFill } from "react-icons/bs";
import { MdMan4 } from "react-icons/md";

function ProspikaStixia() {
    return (
        <div className="md:ml-4">
            <div>
                <div className="flex items-center ">
                    <BsFillPersonFill className="text-2xl" />
                    <h1 className="text-2xl">Στοιχεία Ασφαλισμένου</h1>
                </div>
            </div>

            <div className="mb-5">
                <button className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 mt-5 text-xs font-medium  leading-normal text-white">
                    Επεξεργασία
                </button>
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                
                {/* First column */}
                <div className="col-start-1 border border-blue-500">
                    <div className="border bg-blue-700 text-white p-5">
                        <div className="flex items-center">
                            <MdMan4 className="text-3xl" />
                            <span className="text-3xl">Προσωπικά Στοιχεία</span>
                        </div>
                    </div>

                    <div>

                        <div className="p-4 m-4 text-xl bg-teal-100 rounded-lg shadow-lg">
                            <p className="flex text-left">
                                <span>
                                    <img
                                        src="img/exclamation-circle-solid-svgrepo-com.svg"
                                        alt="exclamation-circle-solid"
                                        className="w-7 h-7"
                                    />
                                </span>
                                Αν υπάρχουν μεταβολές στα προσωπικά σας στοιχεία
                                παρακαλούμε να ενημερώσετε το Ταμείο.
                            </p>
                        </div>
                        

                        <div>

                            

                        </div>
                    
                    
                    </div>



                </div>

                

                {/* Second Column */}
            </div>
        </div>
    );
}

export default ProspikaStixia;
