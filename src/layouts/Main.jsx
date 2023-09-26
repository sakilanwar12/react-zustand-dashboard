import { Outlet } from "react-router-dom";
import Header from "../partials/common/Header";
import Sidebar from "../partials/common/Sidebar";
import CustomizerModal from "../components/CustomizerModal";
import Footer from "../partials/common/Footer";

import useStore from "../state/store";
import { FaGear } from "react-icons/fa6";
import { setOpenSettings } from "../state/ThemeActions";
import clsx from "clsx";

const Main = () => {

    const { settingsOpen, menuHidden, footer, contentWidth } = useStore();

    const container = clsx({
        'w-full pl-5 pr-5': contentWidth === 'container-full' && menuHidden,
        'w-full pl-5 pr-5 pl-[220px]': contentWidth === 'container-full' && !menuHidden,
        [contentWidth]: contentWidth !== 'container-full',
      });


    return (
        <>
            <Header />
            <div className={`bg-[#f1f5f9] dark:bg-[#0e172a] min-h-screen relative ${!menuHidden ? "pl-[100px]" : ""}`}>

                {!menuHidden && <Sidebar />}

                {settingsOpen ? <CustomizerModal /> : ""}

                <div className={container}>
                    <div className="settings-btn">
                        <button type="button" className="fixed top-1/2 right-0 rotate-90 bg-black flex items-center space-x-2 text-white py-1 px-3 rounded-md capitalize"
                            onClick={setOpenSettings} >
                            <FaGear className="animate-spin" />
                            <span className="text-sm"> settings</span>
                        </button>
                    </div>

                    <Outlet/>
                </div>
            </div>

            {footer !== "hidden" && <Footer />}
        </>
    );
};

export default Main;