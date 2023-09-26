
import { HiMoon, HiShoppingCart, HiMail, HiOutlineBell, HiChevronDown } from "react-icons/hi";
import { VscSymbolColor } from "react-icons/vsc";
import { FaSun } from "react-icons/fa";
import author from "./../../assets/images/author.png";
import { setGrayScale, setOpenAuthorMenu, setOpenInbox, setOpenNotificationsBox, setShoppingCart, setTheme } from "../../state/ThemeActions";
import useStore from "../../state/store";
import { useState } from "react";
import message_data from "../../jsonData/message";
import Cart from "../../components/Cart";
import Inbox from "../../components/Inbox";
import Notification from "../../components/Notification";
import notfication_data from "../../jsonData/notification_data";
import AuthorMenu from "./AuthorMenu";
import author_menu_data from "../../jsonData/author_menu_data";


const NavTools = () => {
    const [languageSubOpen, setlanguageSubOpen] = useState(false);
    const { shoppingCart, openInbox, openNotification, openAuthorMenu } = useStore();
    const { theme } = useStore();
    return (
        <div className="flex items-center space-x-8">

            {/* Language sub menu */}
            <div className="relative">
                <button
                    className="relative w-full flex items-center cursor-pointer "
                    type="button"
                    onClick={() => setlanguageSubOpen(!languageSubOpen)}
                >
                    <span className="inline-block  w-6 h-6 rounded-full">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                            alt=""
                            className="h-full w-full object-cover rounded-full"
                        />
                    </span>
                    <span className="text-sm ml-2 font-medium text-slate-600 dark:text-slate-300">
                        En
                    </span>
                </button>
                {/* language dropdown */}
                {languageSubOpen &&
                    <ul
                        className="absolute min-w-[100px] z-[999] md:top-[50px] top-[43px] -left-6 w-auto max-h-60
                     overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white
                      dark:bg-slate-800 mt-1 "
                    >
                        <li
                            className="w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2
                             last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b
                              text-slate-600 dark:text-slate-300
                              hover:bg-slate-100 dark:hover:bg-black
                              ">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="flex-none">
                                    <span className="lg:w-6 lg:h-6 w-4 h-4 rounded-full inline-block">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                                            alt=""
                                            className="w-full h-full object-cover relative top-1 rounded-full"
                                        />
                                    </span>
                                </span>
                                <span className="flex-1 lg:text-base text-sm capitalize">En</span>
                            </div>
                        </li>
                        <li className="w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-black" >
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="flex-none">
                                    <span className="lg:w-6 lg:h-6 w-4 h-4 rounded-full inline-block">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="
                                            alt=""
                                            className="w-full h-full object-cover relative top-1 rounded-full"
                                        />
                                    </span>
                                </span>
                                <span className="flex-1 lg:text-base text-sm capitalize">Gn</span>
                            </div>
                        </li>
                    </ul>
                }
            </div>

            {/* Theme  */}

            <span className="h-10 w-10 inline-flex cursor-pointer justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100">
                {theme === "light" ? <HiMoon onClick={() => setTheme("dark")} /> : <FaSun onClick={() => setTheme("light")} />}
            </span>

            {/* Grayscale */}

            <span className="h-10 w-10 cursor-pointer inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100">
                <VscSymbolColor onClick={setGrayScale} />
            </span>

            {/* Shopping Cart  */}

            <div className="relative"
            >
                <span className="h-10 w-10 cursor-pointer inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100" onClick={setShoppingCart}>
                    <HiShoppingCart />
                </span>

                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs font-bold text-white">0</span>
                {shoppingCart && <Cart price={200} subtotal={220} />}
            </div>

            {/* Message Box */}


            <div className="relative">
                <span className="h-10 w-10 cursor-pointer inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100" onClick={setOpenInbox}>
                    <HiMail />
                </span>

                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs font-bold text-white">5</span>
                {openInbox && <Inbox message_data={message_data} />}
            </div>

            {/* Notificatin Box */}


            <div className="relative">
                <span className="h-10 w-10 cursor-pointer inline-flex justify-center items-center text-lg
                 dark:bg-slate-900 rounded-full bg-slate-100" onClick={setOpenNotificationsBox}>
                    <HiOutlineBell />
                </span>
                {openNotification && <Notification notfication_data={notfication_data} />}


                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 
                flex justify-center items-center text-xs font-bold text-white">10</span>
            </div>

            {/* Author Menu */}

            
            <div className="cursor-pointer relative">
                <div className="flex items-center" onClick={setOpenAuthorMenu}>
                    <div className="mr-2">
                        <img src={author} alt="" />
                    </div>
                    <span className="text-slate-600 text-sm font-medium block">Albert Flores</span>
                    <span><HiChevronDown /></span>
                </div>
                {openAuthorMenu && <AuthorMenu author_menu_data={author_menu_data} />}

            </div>


        </div>
    );
};

export default NavTools;