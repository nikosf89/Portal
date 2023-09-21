import { AiFillFile } from "react-icons/ai";

function Eggrafa({isGreek}) {
    return (

        <div className="flex-grow bg-gray mb-5">
                <div className="ml-4 ">
            <div className="flex items-center mt-10">
              <AiFillFile className="text-3xl"/>
              <span className="text-3xl">{isGreek? "Εγγραφα" : "Documents"}</span>
            </div>
            <div className="w-5/6 px-6  bg-white rounded-md shadow-md md:w-1/2 lg:w-2/3 mt-10">
                <div className="flex items-center justify-between py-4">
                    <p className="text-base md:text-lg xl:text-xl">
                        {isGreek? "Ετήσιο Ενημερωτικό" : "Annual Statement"}
                    </p>

                    <p className="px-1 text-white rounded-lg shadow-lg bg-cyan-500">
                        6
                    </p>
                </div>

                <div className="flex items-center justify-between py-4">
                    <p className="text-base md:text-lg xl:text-xl">
                        {isGreek? "Φορολογική Βεβαίωση" : "Tax Clearence"}
                    </p>

                    <p className="px-1 text-white rounded-lg shadow-lg bg-cyan-500">
                        1
                    </p>
                </div>
            </div>
        </div>
        </div>

        
    );
}

export default Eggrafa;
