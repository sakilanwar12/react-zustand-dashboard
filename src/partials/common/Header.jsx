import { HiArrowNarrowRight } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import NavTools from "./NavTools";
import useStore from "../../state/store";
const Header = () => {
  const nav = useStore(state => state.nav);
  return (
    <header className={`bg-white dark:bg-[#1e293b] dark:text-white border-item shadow-lg pl-[350px] ${nav}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button type="button"><span><HiArrowNarrowRight /></span></button>
          <button type="button" className="flex items-center"> <span><FaSearch /> search...</span></button>
        </div>
        <div className="navtools">
          <NavTools />
        </div>
      </div>
    </header>
  );
};

export default Header;