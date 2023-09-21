
import { HiMoon, HiShoppingCart, HiMail, HiOutlineBell, HiChevronDown } from "react-icons/hi";
import author from "./../../assets/images/author.png";
import flag from "./../../assets/images/flag.png";
const NavTools = () => {
    return (
        <div className="flex items-center space-x-8">
            <div>
                <button className="w-4 h-4 rounded-full">
                    <span> <img src={flag} alt="" /></span>
                    <span>En</span>
                </button>
           
            </div>
            <div>
                <HiMoon />
            </div>
            <div>
                <HiShoppingCart />
                <span className="badge">0</span>
            </div>
            <div>
                <HiMail />
                <span className="badge">5</span>
            </div>
            <div>
                <HiOutlineBell />
                <span className="badge">10</span>
            </div>
            <div>
                <div>
                    <img src={author} alt="" />
                </div>
                <h2>Albert Flores</h2>
                <span><HiChevronDown /></span>
            </div>
        </div>
    );
};

export default NavTools;