import { HiArrowNarrowRight } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import NavTools from "./NavTools";
import useStore from "../../state/store";
const Header = () => {
  const nav = useStore(state => state.nav);
  return (
    <header className={`bg-white shadow-lg ${nav}`}>
      <div className="flex items-center justify-center">
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