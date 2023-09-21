function Users({isGreek}) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4 sm:items-start sm:justify-start">
                <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                    <img
                        src="img/user-group-svgrepo-com.svg"
                        alt="user-group"
                        className="w-12 h-12  "
                    />

                    <p className="px-2 text-3xl">{isGreek? "Χρήστες" : "Users"}</p>
                </div>

                <button
                    type="button"
                    className="px-5 py-3 mb-4 ml-5 text-base font-medium text-white rounded-md w-72 bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                    {isGreek? "Ενεργοποίηση Λογαριασμού" : "Account Activation"}
                </button>

                <div className="w-full px-1">
                    <form className="flex flex-col items-center justify-start space-y-2 sm:space-y-0 sm:flex-row ">
                        <label
                            for="from"
                            className="block px-2 text-sm font-medium text-gray-700 md:text-base xl:text-lg "></label>
                        <input
                            type="text"
                            id="from"
                            name="from"
                            placeholder={isGreek ? "Όνομα, Επώνυμο, Αρ.Μητρώου, ΑΦΜ, ΑΜΚΑ, ΑΡ.Μισθοδοσίας" : "Name, Username, Email, Member ID"}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-1/2 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                            required
                        />

                        <button
                            type="button"
                            className="w-32 px-5 py-3 ml-2 text-base font-medium text-white rounded-md bg-custom-new-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            {isGreek? "Αναζήτηση" : "Search"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Users;
