import './Navbar.css';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
        <div className="left">
            <p>Workspace / Overview</p>
        </div>
        <div className="right">
            <p><IoMdSearch /></p>
            <p>D</p>
            <p>N</p>
        </div>
    </div>
    </>
  )
}

export default Navbar;