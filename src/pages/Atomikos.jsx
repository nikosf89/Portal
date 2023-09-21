function Atomikos({isGreek}) {
    return (
        <div>
            <div className="p-4 ">
                <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                    <img
                        src="img/pig-piggy-bank-svgrepo-com.svg"
                        alt="pig-piggy-bank"
                        className="w-12 h-12 "
                    />

                    <p className="px-2 text-3xl">{isGreek? "Ατομικός λογαριασμός" : "Personal Account"}</p>
                </div>

                <div className="p-2 md:p-5">
                    <h2 className="py-2 text-2xl text-left">
                        {isGreek? "Σύνοψη Λογαριασμού" : "Account Summary"}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead>
                                <tr className="font-sans text-white">
                                    <th className="p-2 border-b border-r w-68 bg-custom-new-blue">
                                        {isGreek? "Είδος Λογαριασμού" : "Account Type"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                    {isGreek? "Επενδυτικό Προϊόν" : "Investment Product"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Πλήθος" : "Quantity"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Μονάδα" : "Unit"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Αξία Μονάδας" : "Unit Price"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Ημ.Αποτίμησης" : "Valuation Date"}
                                    </th>
                                    <th className="p-2 border-b border-r bg-custom-new-blue">
                                        {isGreek? "Αποτίμηση" : "Valuation"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-right border-gray-400 ">
                                    <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"} 
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                        {isGreek? "Ανεπένδυτο ποσό σε Ευρώ" : "Euros for investment"}
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                        {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                        {isGreek? "Ευρώ" : "Euro"}
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                        1.000
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                    <td className="p-2 border-r border-gray-400 ">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                </tr>

                                <tr className="text-right bg-white">
                                    <td className="p-2 border-b border-r">
                                    {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                    </td>
                                    <td className="p-2 border-b border-r">
                                        {isGreek? "Αμοιβαίο Κεφάλαιο" : "Mutual Fund"}
                                    </td>
                                    <td className="p-2 border-b border-r">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                    <td className="p-2 border-b border-r">
                                        {isGreek? "Μερίδα" : "Share"}
                                    </td>
                                    <td className="p-2 border-b border-r">
                                        13.2599
                                    </td>
                                    <td className="p-2 border-b border-r">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                    <td className="p-2 border-b border-r ">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                </tr>

                                <tr className="h-10 text-right text-white">
                                    <td className="p-2 bg-custom-new-blue"></td>
                                    <td className="p-2 bg-custom-new-blue"></td>
                                    <td className="p-2 bg-custom-new-blue"></td>
                                    <td className="p-2 bg-custom-new-blue"></td>
                                    <td className="p-2 bg-custom-new-blue"></td>
                                    <td className="p-2 border-r bg-custom-new-blue">
                                        {isGreek? "Σύνολο": "Summary"}
                                    </td>
                                    <td className="p-2 border-r bg-custom-new-blue">
                                    {isGreek? "Στοιχεία": "Details"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2 className="px-4 text-2xl text-left">
                    {isGreek? "Κινήσεις Λογαριασμού" : "Account Transactions"}
                </h2>

                <div className="py-4 mx-auto mt-4 ml-2 rounded-lg shadow-lg bg-col-1">
                    <form className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row">
                        <div className="flex items-center mr-4">
                            <label
                                for="from"
                                className="block px-2 text-sm font-medium text-gray-700 md:text-base xl:text-lg">
                                {isGreek? "Απο": "From"}
                            </label>
                            <input
                                type="date"
                                id="from"
                                name="from"
                                placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-40 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                required
                            />
                        </div>

                        <div className="flex items-center mr-4">
                            <label
                                for="to"
                                className="block pr-4 text-sm font-medium text-gray-700 md:text-base xl:text-lg">
                                {isGreek? "Εως": "To"}
                                Έως{" "}
                            </label>
                            <input
                                type="date"
                                id="to"
                                name="to"
                                placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-40 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                required
                            />
                        </div>

                        <div className="hidden xl:flex xl:items-center ">
                            <button
                                type="submit"
                                className="w-48 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Υποβολή": "Submit"}
                            </button>

                            <button
                                type="submit"
                                className="w-48 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Επενδυτικό Προϊόν" : "Investement Product"}
                            </button>

                            <button
                                type="button"
                                onclick="window.print()"
                                className="w-48 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Εκτύπωση" :"Print"}
                            </button>

                            <button
                                type="button"
                                className="w-48 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Εξαγωγή" : "Export"}
                            </button>
                        </div>
                    </form>

                    <form className="flex flex-col items-center justify-start p-4 mt-2 ml-4 space-y-2 xl:hidden sm:justify-normal sm:flex-row sm:space-y-0">
                        <button
                            type="submit"
                            className="w-48 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Υποβολή": "Submit"}
                        </button>

                        <button
                            type="submit"
                            className="w-48 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Επενδυτικό Προϊόν" : "Investement Product"}
                        </button>

                        <button
                            type="button"
                            onclick="window.print()"
                            className="w-48 px-5 py-3 text-base font-medium text-white rounded-md sm:ml-2 bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Εκτύπωση" :"Print"}
                        </button>

                        <button
                            type="button"
                            className="w-48 px-5 py-3 text-base font-medium text-white rounded-md sm:ml-2 bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Εξαγωγή" : "Export"}
                        </button>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <div className="container py-8 mx-auto ">
                        <h2 className="px-5 text-2xl text-left">
                            {isGreek? "Ανεπένδυτο ποσό σε Ευρώ": "Euro for investment"}
                        </h2>

                        <form className="p-0 text-xs sm:p-4 sm:text-sm xl:text-base">
                            <table className="w-full border border-gray-300 min-w-min">
                                <thead>
                                    <tr className="font-sans text-white">
                                        <th className="p-2 border-b border-r w-60 bg-custom-new-blue">
                                            {isGreek? "Ημερομηνία" : "Date"}
                                        </th>
                                        <th className="p-2 border-b border-r w-60 bg-custom-new-blue">
                                            {isGreek? "Είδος Λογαριασμού" : "Account Type"}
                                        </th>
                                        <th className="p-2 border-b border-r w-52 bg-custom-new-blue">
                                            {isGreek? "Είδος Κίνησης": "Transaction Type"}
                                        </th>
                                        <th className="w-40 p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Περιγραφή" : "Description"}
                                        </th>
                                        <th className="w-32 p-2 border-b border-r bg-custom-new-blue">
                                            {isGreek? "Ευρώ" : "Euro"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center border-yellow-300 bg-col-2">
                                        <td className="p-2 text-center border-r border-yellow-300">
                                            {isGreek? "Προηγούμενο Υπόλοιπο" : "Open Balance"}
                                        </td>
                                        <td className="p-2 border-r border-yellow-300">
                                            {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-yellow-300"></td>
                                        <td className="p-2 border-r border-yellow-300"></td>
                                        <td className="p-2 text-right border-r border-yellow-300">
                                            0,00
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30/03/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            3 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/04/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            27/04/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            4 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/05/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30/05/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            5 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/06/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            29/06/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            6 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/07/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            28/07/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            7 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/08/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center bg-white">
                                        <td className="p-2 text-center border-b border-r">
                                            30/08/2023
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Εισφορά" : "Contribution"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            8 - 2023
                                        </td>
                                        <td className="p-2 text-right border-b border-r">
                                        {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-center border-b border-gray-500">
                                        <td className="p-2 text-center border-r border-gray-400">
                                            01/09/2023
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Τακτική Εισφορά Ασφαλισμένου" : "Member Regular Contribution"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Αγορά Μεριδίων" : "Buy shares"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 text-right border-r border-gray-400">
                                            {isGreek? "Στοιχεία" : "Details"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atomikos;
