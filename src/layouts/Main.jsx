import { Outlet } from "react-router-dom";
import Header from "../partials/common/Header";
import Sidebar from "../partials/common/Sidebar";
import CustomizerModal from "../components/CustomizerModal";
import Footer from "../partials/common/Footer";
import { setToggleSettings } from "../state/ThemeActions";
import useStore from "../state/store";
import { FaGear } from "react-icons/fa6";

const Main = () => {

    const { toggleSettings, sidebarToggle, footer, contentWidth } = useStore();

    let container = "";
    if (contentWidth === "container-full" && !sidebarToggle) {
        container = "container-full sidebar-open"
    } else if (contentWidth === "container-full" && sidebarToggle) {
        container = "container-full"
    } else {
        container = contentWidth;
    }



    return (
        <div className=" bg-[#f1f5f9] dark:bg-[#0e172a] min-h-screen relative">
            <Header />
            {!sidebarToggle && <Sidebar />}

            {toggleSettings ? <CustomizerModal /> : ""}
            <div className={container}>
                <div className="settings-btn">
                    <button type="button" className="fixed top-1/2 right-0 rotate-90 bg-black flex items-center space-x-2 text-white py-1 px-3 rounded-md capitalize"
                        onClick={setToggleSettings}>
                        <FaGear className="animate-spin" />
                        <span className="text-sm"> settings</span>
                    </button>
                </div>


                <Outlet></Outlet>

                {footer !== "hidden-footer" && <Footer />}

            </div>
        </div>
    );
};

export default Main;