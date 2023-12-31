
import { setContainer, setFooter, setNav, setSemiDark, setSkin, setTheme, setOpenSettings, setMenuHidden } from "../state/ThemeActions";
import { HiX } from "react-icons/hi";
import useStore from "../state/store";

const CustomizerModal = () => {

    const { skin_bordered, theme, contentWidth, nav, footer, menuHidden } = useStore();
    return (
        <div className="w-[320px] bg-white text-[#222] dark:bg-[#0e172a]  shadow-3xl px-4 pt-4  min-h-screen absolute z-50 top-0 right-0">
            <div className="flex justify-between items-center pr-2">
                <div>
                    <div><span className="block text-xl text-slate-900 font-medium dark:text-[#eee]">Theme customizer</span>
                        <span className="block text-sm font-light text-[#68768A] dark:text-[#eee]">Customize & Preview in Real Time</span>
                    </div>
                </div>

                <div>
                    <button type="button"
                        onClick={setOpenSettings}
                    >
                        <HiX className="text-xl text-slate-900 dark:text-[#eee]" />
                    </button>
                </div>
            </div>


            <div className="border my-5"></div>


            {/* Skin style */}

            <div className="space-y-4">
                <div>
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Skin</h4>

                    <label htmlFor="skin_default" className="mr-2">
                        <input type="radio" defaultValue="default" id="skin_default" checked={skin_bordered === "skin_default"} name="skin" onChange={() => setSkin("skin_default")} />

                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Default</span>
                    </label>

                    <label htmlFor="skin_bordered">
                        <input type="radio" defaultValue="bordered" id="skin_bordered" name="skin" checked={skin_bordered === "skin_bordered"} onChange={() => setSkin("skin_bordered")} />
                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Bordered</span>
                    </label>
                </div>

                {/* Theme */}

                <div>
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Theme</h4>

                    <label htmlFor="lightTheme" className="mr-2">
                        <input type="radio" defaultValue="lightTheme" id="lightTheme" name="theme" checked={theme === "light"} onChange={() => setTheme("light")} />
                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Light</span>
                    </label>

                    <label htmlFor="darkTheme">
                        <input type="radio" defaultValue="dark" id="darkTheme" name="theme" checked={theme === "dark"} onChange={() => setTheme("dark")} />
                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Dark</span>
                    </label>
                </div>


                {/* semi dark */}
                <div className=" flex justify-between items-center">
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Semi Dark</h4>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={setSemiDark} id="semi_dark" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                {/* content width */}
                <div>
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Content Width</h4>

                    <label htmlFor="fullWidth" className="mr-2">
                        <input type="radio" defaultValue="fullWidth" id="fullWidth" checked={contentWidth === "container-full"} onChange={() => setContainer("container-full")} name="container" />
                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Full Width</span>
                    </label>

                    <label htmlFor="BoxContentWidth">
                        <input type="radio" defaultValue="BoxContentWidth" id="BoxContentWidth" checked={contentWidth === "container"} onChange={() => setContainer("container")} name="container" />
                        <span className="text-slate-600 text-base dark:text-slate-300 ml-1">Box Width</span>
                    </label>
                </div>

                {/* menu  */}

                <div className="flex justify-between items-center">
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Menu Hidden</h4>

                    <label className="relative inline-flex items-center cursor-pointer" htmlFor="menuHidden">
                        <input type="checkbox" className="sr-only peer" checked={menuHidden} onChange={setMenuHidden} id="menuHidden" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>

                </div>


                {/* Navbar Type  */}
                <div className="border my-5"></div>
                <div>
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Navbar Type</h4>

                    <div className="grid grid-cols-4 gap-1 mt-2">

                        <label htmlFor="stickyNav">
                            <input type="radio" id="stickyNav" name="nav" checked={nav === "sticky top-0 z-10"} onChange={() => setNav("sticky top-0 z-10")} />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Sticky</span>
                        </label>


                        <label htmlFor="staticNav">
                            <input type="radio" id="staticNav" name="nav" checked={nav === "static"} onChange={() => setNav("static")} />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Static</span>
                        </label>


                        <label htmlFor="hiddenNav">
                            <input type="radio" id="hiddenNav" name="nav" checked={nav === "hidden"} onChange={() => setNav("hidden")} />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Hidden</span>
                        </label>
                    </div>
                </div>

                {/* Navbar Type  */}
                <div>
                    <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">Footer Type</h4>

                    <div className="grid grid-cols-4 gap-1 mt-2">
                        <label htmlFor="stickyFooter">
                            <input type="radio" id="stickyFooter" name="footer"
                                checked={footer === "sticky bottom-0 z-2"}
                                onChange={() => setFooter("sticky bottom-0 z-2")}
                            />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Sticky</span>
                        </label>
                        <label htmlFor="staticFooter">
                            <input type="radio" id="staticFooter" name="footer"
                                checked={footer === "static"}
                                onChange={() => setFooter("static")}
                            />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Static</span>
                        </label>
                        <label htmlFor="hiddenFooter">
                            <input type="radio" id="hiddenFooter" name="footer"
                                checked={footer === "hidden"}
                                onChange={() => setFooter("hidden")}
                            />
                            <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-1">Hidden</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomizerModal;