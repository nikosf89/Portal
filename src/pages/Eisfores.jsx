import { useState } from "react";

function Eisfores({isGreek}) {

    const [showCards, setShowCards] = useState(false);
    const toggleCards = () => {
        setShowCards(!showCards);
    }

    return (
        <div>
            <div className="p-4 ">
                <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                    <img
                        src="img/scale-weight-weights-scales-balance-svgrepo-com.svg"
                        alt="scale-weight"
                        className="w-12 h-12 "
                    />

                    <p className="px-2 text-2xl">{isGreek? "Εισφορές" : "Contributions"}</p>
                    <button onClick={toggleCards}  className=" px-2 py-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">{showCards ? "Αλλαγη σε Πινακα": "Αλλαγη σε Καρτες"}</button>
                </div>

                <div className="py-4 mx-auto ml-2 rounded-lg shadow-lg bg-col-1">
                    <form className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row">
                        <div className="flex items-center mr-4">
                            <label
                                for="from"
                                className="block px-2 text-sm font-medium text-gray-700 md:text-base xl:text-lg">
                                {" "}
                                {isGreek? "Από" : "From"}
                            </label>
                            <input
                                type="date"
                                id="from"
                                name="from"
                                placeholder={isGreek? "ΗΗ/ΜΜ/ΕΕΕΕ" : "DD/MM/YYYY"}
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-40 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                required
                            />
                        </div>

                        <div className="flex items-center mr-4">
                            <label
                                for="to"
                                className="block pr-4 text-sm font-medium text-gray-700 md:text-base xl:text-lg">
                                {isGreek? "Έως" : "To"}
                            </label>
                            <input
                                type="date"
                                id="to"
                                name="to"
                                placeholder={isGreek? "ΗΗ/ΜΜ/ΕΕΕΕ" : "DD/MM/YYYY"}
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-40 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                required
                            />
                        </div>

                        <div className="hidden xl:flex xl:items-center ">
                            <button
                                type="submit"
                                className="w-32 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Υποβολή" : "Submit"}
                            </button>

                            <button
                                type="button"
                                onclick="window.print()"
                                className="w-32 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Εκτύπωση": "Print"}
                            </button>

                            <button
                                type="button"
                                className="w-32 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Εξαγωγή" : "Export"}
                            </button>
                        </div>
                    </form>

                    <form className="flex flex-col items-center justify-start p-4 mt-2 ml-4 space-y-2 xl:hidden sm:justify-normal sm:flex-row sm:space-y-0">
                        <button
                            type="submit"
                            className="w-32 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Υποβολή" : "Submit"}
                        </button>

                        <button
                            type="button"
                            onclick="window.print()"
                            className="w-32 px-5 py-3 text-base font-medium text-white rounded-md sm:ml-2 bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Εκτύπωση": "Print"}
                        </button>

                        <button
                            type="button"
                            className="w-32 px-5 py-3 text-base font-medium text-white rounded-md sm:ml-2 bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Εξαγωγή" : "Export"}
                        </button>
                    </form>
                </div>

                {!showCards ?  <div className="">
                    <div className="container py-8 mx-auto overflow-x-auto">
                        <form className="p-0 text-xs sm:p-4 sm:text-sm xl:text-base ">
                            <table className="w-full border border-gray-300">
                                <thead>
                                    <tr className="font-sans text-white">
                                        <th className="w-40 p-2 border-r bg-custom-new-blue"></th>
                                        <th
                                            className="p-2 border-b border-r bg-custom-new-blue"
                                            colspan="3">
                                            {isGreek? "Εισφορές" : "Contributions"}
                                        </th>
                                        <th
                                            className="p-2 border-b border-r bg-custom-new-blue"
                                            colspan="3">
                                            {isGreek? "Κατανομή Εισφορών" : "Contribution Distribution"}
                                        </th>
                                    </tr>
                                    <tr className="font-sans text-white">
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Ημερομηνία" : "Date"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Απαίτηση" : "Receivable"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Πληρωμή" : "Payment"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Υπόλοιπο" : "Balance"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Εφάπαξ" : "Lump-Sum"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Αλληλεγγύης" : "Solidarity"}
                                        </th>
                                        <th className="p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Διαχειριστικά Έξοδα" : "Administration Fee"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-right border-yellow-300 bg-col-2">
                                        <td className="p-2 text-center border-r border-yellow-300">
                                            {isGreek? "Ανοιχτό Υπόλοιπο" : "Open Balance"}
                                        </td>
                                        <td className="p-2 border-r border-yellow-300">
                                            17.185,48
                                        </td>
                                        <td className="p-2 border-r border-yellow-300">
                                            16.985,48
                                        </td>
                                        <td className="p-2 border-r border-yellow-300">
                                            200,00
                                        </td>
                                        <td className="p-2 border-r border-yellow-300 ">
                                            15.547,14
                                        </td>
                                        <td className="p-2 border-r border-yellow-300 ">
                                            647,73
                                        </td>
                                        <td className="p-2 border-r border-yellow-300 ">
                                            763,61
                                        </td>
                                    </tr>

                                    <tr className="text-right bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30/03/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/04/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            27/04/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/05/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30/05/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/06/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-b border-r">
                                            29/06/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/07/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            28/07/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/08/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30{isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-right border-b border-gray-500">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/09/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div> : <div id="content2" className=" mt-4">


                        
                        <div className="grid grid-cols-1 gap-2 p-2 mt-4 md:gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">

                         
                            <div className="p-2 border bg-white border-gray-300 rounded-lg shadow-lg bg-col-2">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">{isGreek? "Ημερομηνία:" : "Date"}</div>
                                    <div>Ανοιχτό Υπόλοιπο </div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>17.185,48</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>16.985,48</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>200,00</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>15.547,14</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>647,73</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>763,61</div>
                                </div>
                            
                            </div>

                          
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>30/03/2023 </div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                        
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/04/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                          
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>27/04/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                           
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/05/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                            
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>30/05/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                          
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/06/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                           
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>29/06/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                           
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/07/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                            
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>28/07/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                          
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/08/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                           
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>30/08/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>

                            
                           
                            <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">

                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="font-semibold">Ημερομηνία:</div>
                                    <div>01/09/2023</div>
                                    <div className="font-semibold">Εισφορές</div>
                                    <div></div>
                                    <div className="font-semibold">Απαίτηση:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Πληρωμή:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Υπόλοιπο:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Κατανομή Εισφορών</div>
                                    <div></div>
                                    <div className="font-semibold">Εφάπαξ:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Αλληλεγγύης:</div>
                                    <div>Στοιχεία</div>
                                    <div className="font-semibold">Διαχειριστικά Έξοδα:</div>
                                    <div>Στοιχεία</div>
                                </div>
                            
                            </div>
                            
                            
                        
                        
                        </div>


                    </div>}
                

                
            
            
            
            </div>
        </div>
    );
}

export default Eisfores;
