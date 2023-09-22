import { Outlet } from "react-router-dom";
import Header from "../partials/common/Header";
import Sidebar from "../partials/common/Sidebar";
import CustomizerModal from "../components/CustomizerModal";
import useStore from "../state/store";
import Footer from "../partials/common/Footer";


const Main = () => {
    const {toggleSettings,setToggleSettings,sidebarToggle,footer,contentWidth} = useStore();

    let container = "";
    if (contentWidth === "container-full" && !sidebarToggle) {
        container = "container-full sidebar-open"
    } else if (contentWidth === "container-full" && sidebarToggle) {
        container = "container-full"
    } else {
        container = contentWidth
    }
console.log(contentWidth)
    return (
        <div className=" bg-[#f1f5f9] dark:bg-black min-h-screen relative">
            <Header />
            {!sidebarToggle && <Sidebar />}

            {toggleSettings ? <CustomizerModal /> : ""}
            <div className={` ${container}`}>
                <div className="settings-btn">
                    <button type="button" className="fixed top-1/2 right-10 bg-black text-white py-1 px-5 rounded-sm capitalize" onClick={setToggleSettings}>settings</button>
                </div>

                <Outlet></Outlet>

                {footer !== "hidden-footer" && <Footer />}

            </div>
        </div>
    );
};

export default Main;