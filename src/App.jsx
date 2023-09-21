import Dashboard from "./pages/Dashboard";
import Atomikos from "./pages/Atomikos";
import Eisfores from "./pages/Eisfores";
import Eggrafa from "./pages/Eggrafa";
import Users from "./pages/Users";
import Istoriko from "./pages/Istoriko";
import Prosopika from "./pages/Prosopika";
import Members from "./pages/Members";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    const [hideMenu, setHideMenu] = useState(false);
    const [asideOnLeft, setAsideOnLeft] = useState(true);
    const [isGreek, setIsGreek] = useState(true);

    const toggleLanguage = () => {
        setIsGreek(!isGreek)
    }
    
    const smLimit = 640;
    const mdLimit = 768;
    const toggleMenu = () => {
        setHideMenu(!hideMenu);
    };

    useEffect(() => {
        if (window.innerWidth < mdLimit) {
            setAsideOnLeft(false)
        }
        const handleResize = () => {
            if (window.innerWidth >= smLimit) 
                setHideMenu(false);
            if (window.innerWidth >= mdLimit)
                setAsideOnLeft(true)
            else
                setAsideOnLeft(false)
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div className="font-sans bg-gray-200">
                <div className="md:flex grow min-h-screen" >
                    {asideOnLeft ? <Aside isGreek={isGreek}  hideMenu={hideMenu} /> : ""}
                    <div className="flex flex-col grow md:w-3/4" style={{minHeight: "100vh"}}>
                        <Navbar isGreek={isGreek} setIsGreek={toggleLanguage} toggleMenu={toggleMenu} />
                        {!asideOnLeft ? <Aside hideMenu={hideMenu} /> : ""}
                        <Routes>
                            <Route path="/" element={<Dashboard isGreek={isGreek} />} />
                            <Route path="/atomikos" element={<Atomikos isGreek={isGreek} />} />
                            <Route path="/eisfores" element={<Eisfores isGreek={isGreek} />} />
                            <Route path="/eggrafa" element={<Eggrafa isGreek={isGreek} />} />
                            <Route path="/users" element={<Users isGreek={isGreek} />} />
                            <Route path="/istoriko" element={<Istoriko isGreek={isGreek} />} />
                            <Route path="/prosopika" element={<Prosopika isGreek={isGreek} />} />
                            <Route path="/members" element={<Members isGreek={isGreek} />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
