
import { FaSearch } from "react-icons/fa";
import NavTools from "./NavTools";
import useStore from "../../state/store";
const Header = () => {
  const { nav, menuHidden } = useStore();
  return (
    <header className={`bg-white dark:bg-[#1e293b] dark:text-white border-item shadow-lg px-5 pr-14 py-4 ${nav} ${!menuHidden ? "pl-[335px]" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button type="button" className="flex items-center capitalize text-sm text-[#94a3b8]"> <FaSearch className="mr-2" /> <span> search...</span></button>
        </div>
        <div className="navtools">
          <NavTools />
        </div>
      </div>
    </header>
  );
};

export default Header;