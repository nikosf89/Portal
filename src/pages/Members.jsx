function Members({isGreek}) {
    return (
        <div className="ml-4 mt-10">
            <div className="text-gray-800 ml-2 text-3xl flex items-center font-bold">
                <img
                    src="img/user-group-svgrepo-com.svg"
                    className="w-12 h-12 m-2 "
                    alt=""
                />
                <span className="">{isGreek? "Χρήστες" : "Members"}</span>
            </div>
            <div className="w-full mt-5 pb-5">
                <form className="flex flex-col items-start sm:flex-row">
                    {" "}
                    {/* Use items-start to align elements at the start */}
                    <input
                        type="text"
                        id="from"
                        name="from"
                        placeholder={isGreek ? "Όνομα, Επώνυμο, Αρ.Μητρώου, ΑΦΜ, ΑΜΚΑ, ΑΡ.Μισθοδοσίας" : "Name, Username, Email, Member ID"}
                        className="w-full mb-5 px-4 py-2 text-sm border border-gray-300 rounded-md xl:w-1/2 sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
    );
}

export default Members;
