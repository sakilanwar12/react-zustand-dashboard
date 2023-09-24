
import { HiMoon, HiShoppingCart, HiMail, HiOutlineBell, HiChevronDown } from "react-icons/hi";
import { VscSymbolColor } from "react-icons/vsc";
import { FaSun } from "react-icons/fa";
import author from "./../../assets/images/author.png";
import flag from "./../../assets/images/flag.png";
import { setGrayScale, setTheme } from "../../state/ThemeActions";
import useStore from "../../state/store";
const NavTools = () => {
    const { theme } = useStore();
    return (
        <div className="flex items-center space-x-8">

            <button className=" flex items-center">
                <span className="w-8 mr-1  rounded-full block"> <img src={flag} className=" rounded-full object-cover" alt="" /></span>
                <span className="block">En</span>
            </button>

            <span className="h-10 w-10 inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100">
                {theme === "light" ? <HiMoon onClick={() => setTheme("dark")} /> : <FaSun onClick={() => setTheme("light")} />}
            </span>

            <span className="h-10 w-10 inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100">
                <VscSymbolColor onClick={setGrayScale} />
            </span>

            <div className="h-10 w-10 inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100 relative">
                <HiShoppingCart />
                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs font-bold text-white">0</span>
                {/* <ShoppingCart /> */}

            </div>
            <div className="h-10 w-10 inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100 relative">
                <HiMail />
                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs font-bold text-white">5</span>
            </div>
            <div className="h-10 w-10 inline-flex justify-center items-center text-lg dark:bg-slate-900 rounded-full bg-slate-100 relative">
                <HiOutlineBell />
                <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs font-bold text-white">10</span>
            </div>

            <div className="flex items-center">
                <div className="mr-2">
                    <img src={author} alt="" />
                </div>
                <span className="text-slate-600 text-sm font-medium block">Albert Flores</span>
                <span><HiChevronDown /></span>
            </div>
        </div>
    );
};

export default NavTools;