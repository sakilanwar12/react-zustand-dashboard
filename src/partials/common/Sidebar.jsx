import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-[300px] min-h-screen bg-white shadow-xl px-5 pt-5 absolute z-20 top-0 left-0">
            <div className="logo-area pt-20">
                <p className="">Logo</p>
                
            </div>
            <h2 className="e pt-5">Sidebar</h2>
            <div className="mt-5">
                <h3 className="">Pages</h3>
                <ul>
                    <li>
                        <Link to="demo">Demo </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;