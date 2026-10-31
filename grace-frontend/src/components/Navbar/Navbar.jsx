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
            <p><IoMdSearch /></p>
            <p><CiCompass1 /></p>
            <p>N</p>
        </div>
    </div>
    </>
  )
}

export default Navbar;