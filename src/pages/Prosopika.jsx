function Prosopika({isGreek}) {
    return (
        <div className="p-4">
            <div className="flex items-center justify-center p-2 ml-2 sm:justify-start max-h-20">
                <p className="px-2 text-2xl">
                    {isGreek ? "Στοιχειά ασφαλισμένου - Επεξεργασία" : "Member Information - Processing"}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2  xl:gap-4">
                <div className="">
                    <div className="bg-white border-2 rounded-lg border-custom-new-blue">
                        <div className="grid">
                            <div className="p-4 text-white border-2 rounded-sm shadow-lg border-custom-new-blue bg-custom-new-blue">
                                <div>
                                    <img src="" alt="" />
                                    <p className="text-xl">
                                        {isGreek? "Προσωπικά Στοιχεία" : "Personal Information"}
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="p-4 m-4 text-xl bg-teal-100 rounded-lg shadow-lg">
                                    <p className="flex text-left">
                                        <span>
                                            <img
                                                src="img/exclamation-circle-solid-svgrepo-com.svg"
                                                alt="exclamation-circle-solid"
                                                className="w-7 h-7"
                                            />
                                        </span>
                                        {isGreek ? "Αν υπάρχουν μεταβολές στα προσωπικά σας στοιχεία παρακαλούμε να ενημερώσετε το Ταμείο."
                                        : "If there are changes to your personal information details please inform the Fund."}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                            {isGreek? "ΑΜ Ασφαλισμένου:" : "Member ID:"}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="am_insured"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="am_insured"
                                                    name="am_insured"
                                                    placeholder={isGreek? "ΑΜ Ασφαλισμένου:" : "Member ID:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                            {isGreek?"Ημερομηνία Εγγραφής:": "Entry Date:"}
                                            
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="registration_date"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="date"
                                                    id="registration_date"
                                                    name="registration_date"
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                        {isGreek?"Ημερομηνία Διαγραφής:": "Exit Date:"}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="deleting_date"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="date"
                                                    id="deleting_date"
                                                    name="deleting_date"
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                            {isGreek? "Κωδικος Μισθοδοσίας:": "Payroll Code:"}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="payroll_code"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="payroll_code"
                                                    name="payroll_code"
                                                    placeholder={isGreek? "Κωδικος Μισθοδοσίας:": "Payroll Code:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">{isGreek ? "Επώνυμο:" : "Lastname:"}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="last_name"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="last_name"
                                                    name="last_name"
                                                    placeholder={isGreek ? "Επώνυμο:" : "Lastname:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">{isGreek ? "Ονομα:" : "Firstname:"}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="first_name"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    name="first_name"
                                                    placeholder={isGreek ? "Ονομα:" : "Firstname:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                            {isGreek ? "Πατρώνυμο:" : "Fathername:"}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="patronymic"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="patronymic"
                                                    name="patronymic"
                                                    placeholder={isGreek ? "Πατρώνυμο:" : "Fathername:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">
                                            {isGreek? "Ημερομηνία Γέννησης:" : "Date of birth:"}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="birth_date"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="date"
                                                    id="birth_date"
                                                    name="birth_date"
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">{isGreek ? "Φύλο:" : "Gender"}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="select_Sex"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <select
                                                    id="select_Sex"
                                                    name="select_Sex"
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700">
                                                    <option value="select_Sex_option1">
                                                        
                                                    </option>
                                                    <option value="select_Sex_option2">
                                                        {isGreek ? "Γυναίκα" : "Female"}
                                                        
                                                    </option>
                                                    <option
                                                        value="select_Sex_option3"
                                                        selected>
                                                        {isGreek ? "Άλλο" : "Other"}
                                                    </option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">{isGreek ? "Α.Φ.Μ:" : "Tax Identitication Number:"}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="number_afm"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="number_afm"
                                                    name="number_afm"
                                                    placeholder={isGreek ? "Α.Φ.Μ:" : "Tax Identitication Number:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-2">
                                    <div className="flex items-center justify-start col-span-1">
                                        <p className="px-2 text-lg">{isGreek ? "Α.Μ.Κ.Α:" : "Social Security Number:"}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <form action="/sendData" method="POST">
                                            <div className="">
                                                <label
                                                    for="number_amka"
                                                    className="block text-sm font-medium text-gray-700"></label>
                                                <input
                                                    type="text"
                                                    id="number_amka"
                                                    name="number_amka"
                                                    placeholder={isGreek ? "Α.Μ.Κ.Α:" : "Social Security Number:"}
                                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="pb-2 xl:pb-4">
                        <div className="bg-white border-2 rounded-lg border-custom-new-blue">
                            <div className="grid ">
                                <div className="p-4 text-white border-2 rounded-sm shadow-lg border-custom-new-blue bg-custom-new-blue ">
                                    <div className="">
                                        <img src="" alt="" />

                                        <p className="text-xl">{isGreek ? "Επικοινωνία" : "Communication"}</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                E-mail:
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="email_1"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="email"
                                                        id="email_1"
                                                        name="email_1"
                                                        placeholder="E-mail"
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Κινητό:" : "Cellphone:"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="Mobile"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="tel"
                                                        id="Mobile"
                                                        name="Mobile"
                                                        placeholder={isGreek? "Κινητό:" : "Cellphone:"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Σταθερό:" : "Landline:"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="home_telephone"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="tel"
                                                        id="home_telephone"
                                                        name="home_telephone"
                                                        placeholder={isGreek? "Σταθερό:" : "Landline:"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-2  pb-2 xl:pb-4">
                        <div className="bg-white border-2 rounded-lg border-custom-new-blue">
                            <div className="grid ">
                                <div className="p-4 text-white border-2 rounded-sm shadow-lg border-custom-new-blue bg-custom-new-blue">
                                    <div className="">
                                        <img src="" alt="" />

                                        <p className="text-xl">{isGreek? "Διεύθυνση" : "Address"}</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Οδός:" : "Street:"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="residential_address_street"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="text"
                                                        id="residential_address_street"
                                                        name="residential_address_street"
                                                        placeholder={isGreek? "Οδός:" : "Street:"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Πόλη:" : "City"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="residential_address_City"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="text"
                                                        id="residential_address_City"
                                                        name="residential_address_City"
                                                        placeholder={isGreek? "Πόλη:" : "City"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">{isGreek? "Τ.Κ:" : "Postal Code:"}</p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="residential_address_P.O"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="text"
                                                        id="residential_address_P.O"
                                                        name="residential_address_P.O"
                                                        placeholder={isGreek? "Τ.Κ:" : "Postal Code:"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Νομός:" : "Region"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div className="">
                                                    <label
                                                        for="residence_address_Prefecture"
                                                        className="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="text"
                                                        id="residence_address_Prefecture"
                                                        name="residence_address_Prefecture"
                                                        placeholder={isGreek? "Νομός:" : "Region"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2 xl:pb-4">
                        <div className="bg-white border-2 rounded-lg border-custom-new-blue">
                            <div className="grid ">
                                <div className="p-4 text-white border-2 rounded-sm shadow-lg border-custom-new-blue bg-custom-new-blue">
                                    <div className="">
                                        <img src="" alt="" />

                                        <p className="text-xl">
                                            {isGreek? "Λοιπά στοιχεία" : "Other Info"}
                                        </p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="grid grid-cols-3 p-2">
                                        <div className="flex items-center justify-start col-span-1">
                                            <p className="px-2 text-lg">
                                                {isGreek? "Νομός Υπηρεσίας:" : "Work Region:"}
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <form
                                                action="/sendData"
                                                method="POST">
                                                <div class="">
                                                    <label
                                                        for="state_service"
                                                        class="block text-sm font-medium text-gray-700"></label>
                                                    <input
                                                        type="text"
                                                        id="state_service"
                                                        name="state_service"
                                                        placeholder={isGreek? "Νομός Υπηρεσίας:" : "Work Region:"}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 "
                                                        required
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prosopika;
