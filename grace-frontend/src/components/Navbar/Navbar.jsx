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
            <IoMdSearch className='nav-item nav-icon' />
            <CiCompass1 className='nav-item nav-icon' />
            <p className='nav-item'>N</p>
             {/* <p className='nav-item'>N</p> */}

        </div>
    </div>
    </>
  )
}

export default Navbar;