import './Navbar.css';
import { IoMdSearch } from "react-icons/io";
import { CiCompass1 } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
        <div className="left">
            <p>Workspace / Overview</p>
        </div>
        <div className="right">
            <IoMdSearch />
            <CiCompass1 />
            <p>N</p>
        </div>
    </div>
    </>
  )
}

export default Navbar;