import { Link } from "react-router-dom";
import menuData from "./../../jsonData/nav_menu_data";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
const MenuItem = ({ label, url }) => {
    return (
        <li>
            <Link className="capitalize block py-2 px-2  text-[#475569] hover:text-black" to={url}>{label}</Link>
        </li>
    );
}


const SubMenu = ({ label, submenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="transition-all duration-300">
            <div
                className="rounded-md flex justify-between items-center px-2 mb-2 " onClick={toggleSubMenu}>
                <span className="font-medium capitalize "> {label}</span>
                <span 
                className="h-8 w-8  rounded-full border flex justify-center items-center hover:border-black hover:bg-black hover:text-white"
                
                ><HiOutlineChevronRight className={`${isOpen?"rotate-90":""}`} /></span>
            </div>
            {isOpen &&
                <ul>
                    {submenu.map((item, index) => (
                        <MenuItem key={index} label={item.label} url={item.url} />
                    ))}
                </ul>
            }
        </li>
    );
}


const Nav = () => {

    return (
        <nav>
            <ul>
                {menuData.map((menu, index) => (
                    <li key={index}>
                        <div className="text-[#1e293b] uppercase text-sm font-medium my-2"> {menu.menu_label}</div>
                        <ul>
                            {menu.menus.map((menuItem, subIndex) => (
                                'submenu' in menuItem ? (
                                    <SubMenu
                                        key={subIndex}
                                        label={menuItem.label}
                                        submenu={menuItem.submenu}
                                    />
                                ) : (
                                    <MenuItem
                                        key={subIndex}
                                        label={menuItem.label}
                                        url={menuItem.url}
                                    />
                                )
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;







// export default Nav;
