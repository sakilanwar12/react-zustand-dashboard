import { Link } from "react-router-dom";
import useStore from "../../state/store";

const Sidebar = () => {
    const {semi_dark} = useStore();
    return (
        <div className={`w-[300px] min-h-screen  border-item shadow-xl px-5 pt-5 absolute z-20 top-0 left-0 ${semi_dark?"bg-[#475569]":"bg-white"}`}>
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