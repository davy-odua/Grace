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
            <IoMdSearch className='nav-icon' />
            <CiCompass1 className='nav-icon' />
            <p>N</p>
        </div>
    </div>
    </>
  )
}

export default Navbar;