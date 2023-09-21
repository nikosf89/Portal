function Istoriko({isGreek}) {
    return (
        <div>
            <div className="p-4 ">
                <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                    <img
                        src="img/clock-back-with-circular-arrow-svgrepo-com.svg"
                        alt="clock-back"
                        className="w-12 h-12 "
                    />

                    <p className="px-2 text-3xl">{isGreek? "Ιστορικό Ενεργειών" : "Action History"}</p>
                </div>

                <div className="py-4 mx-auto mt-4 ml-2 rounded-lg shadow-lg bg-col-1">
                    <form className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row">
                        <div className="flex items-center mr-4">
                            <label
                                for="from_1"
                                className="block px-2 text-sm font-medium text-gray-700 md:text-base xl:text-lg">
                                {isGreek? "Ημ.Αναφοράς" : "Reference Date"}
                            </label>
                            <input
                                type="date"
                                id="from_1"
                                name="from_1"
                                placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-40 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                required
                            />
                        </div>

                        <div className="hidden xl:flex xl:items-center ">
                            <button
                                type="submit"
                                className="w-48 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                {isGreek? "Προβολή" : "Show"}
                            </button>
                        </div>
                    </form>

                    <form className="flex flex-col items-center justify-start p-4 mt-2 ml-4 space-y-2 xl:hidden sm:justify-normal sm:flex-row sm:space-y-0">
                        <button
                            type="submit"
                            className="w-48 px-5 py-3 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Προβολή" : "Show"}
                        </button>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <div className="container py-8 mx-auto ">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="flex items-center ml-3">
                                <p className="p-2 text-base xl:text-lg">Show</p>

                                <div className="p-2">
                                    <label
                                        for="Number_reports"
                                        className="block text-sm font-medium text-gray-700"></label>
                                    <input
                                        type="number"
                                        id="Number_reports"
                                        name="Number_reports"
                                        placeholder="10"
                                        className="block w-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                        required
                                    />
                                </div>

                                <p className="p-2 text-base xl:text-lg">entries</p>
                            </div>

                            <form className="flex flex-row items-center justify-start p-2 space-y-2 sm:space-y-0 ">
                                <button
                                    type="button"
                                    className="w-32 px-1 py-3 ml-2 text-base font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                                    {isGreek? "Αναζήτηση:" : "Search"}
                                </button>

                                <label
                                    for="from_1"
                                    className="block px-2 text-sm font-medium text-gray-700 md:text-base xl:text-lg "></label>
                                <input
                                    type="text"
                                    id="from_1"
                                    name="from_1"
                                    className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md xl:w-1/2 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    required
                                />
                            </form>
                        </div>

                        <form className="p-0 text-xs sm:p-4 sm:text-sm xl:text-base">
                            <table className="w-full border border-gray-300 min-w-min">
                                <thead>
                                    <tr className="font-sans text-left align-top bg-white">
                                        <th className="w-40 p-2 border-b border-r ">
                                            Timestamp
                                        </th>
                                        <th className="p-2 border-b border-r w-60 ">
                                            Action
                                        </th>
                                        <th className="p-2 border-b border-r w-52 ">
                                            Parameters
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            IP Address
                                        </th>
                                        <th className="w-32 p-2 border-b border-r ">
                                            Platform
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            Browser
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            BrowserVersion
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            Username
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            Memberld
                                        </th>
                                        <th className="w-40 p-2 border-b border-r ">
                                            UserId
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-left align-top border-gray-400">
                                        <td className="h-40 p-2 border-r border-gray-400">
                                            2023-09-06 11:45:26
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Insured - Account
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            FromDate: 2023-09-06T00:00:00+02:00
                                            ToDate: 2023-09-06T00:00:00
                                            exportType: null
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Windows 10
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Chrome
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            114.0
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400 ">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-left align-top bg-white ">
                                        <td className="h-40 p-2 border-b border-r">
                                            2023-09-06 11:45:06
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            Insured - Contributions
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            FromDate: 2023-09-06T00:00:00+02:00
                                            ToDate: 2023-09-06T00:00:00
                                            exportType: null
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            Windows 10
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            Chrome
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            114.0
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-left align-top">
                                        <td className="h-40 p-2 border-r border-gray-400">
                                            2023-09-06 11:31:16
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Account - LogOff
                                        </td>
                                        <td className="p-2 border-r border-gray-400"></td>
                                        <td className="p-2 border-r border-gray-400">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Mac OS
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            SAFARI
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            16.6
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-left align-top bg-white ">
                                        <td className="h-40 p-2 border-b border-r">
                                            2023-09-06 11:31:01
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            Insured - Account
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            FromDate: 2023-09-06T00:00:00+02:00
                                            ToDate: 2023-09-06T00:00:00
                                            exportType: null
                                        </td>
                                        <td className="h-40 p-2 border-b border-r">
                                        {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            Mac OS
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            SAFARI
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            16.6
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-b border-r">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                    </tr>

                                    <tr className="text-left align-top">
                                        <td className="h-40 p-2 border-r border-gray-400">
                                            2023-09-06
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Account - Login
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Result: Successful
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            Mac OS
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            SAFARI
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            16.6
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
                                        </td>
                                        <td className="p-2 border-r border-gray-400">
                                            {isGreek? "Stoixeia" : "Details"}
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

export default Istoriko;
