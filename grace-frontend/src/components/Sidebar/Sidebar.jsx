import './Sidebar.css'

import { GiDiamonds } from "react-icons/gi";
import { LuSquareSlash } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";


const Sidebar = () => {
  return (
    <>
    <div className="side-bar">
        <div className="logo">
            <GiDiamonds className="logo-icon"/>
            <h1 className='logo-text'>
                Grace
                <span>CHURCH GC</span>
            </h1>
        </div>

        <ul>
            <li><a> <LuSquareSlash className="sidebar-icon" /> Overview</a></li>
            <li><a> <RxPeople className="sidebar-icon" /> People</a></li>
            <li><a> <SlCalender className="sidebar-icon" /> Events</a></li>
            <li><a> <BsCurrencyDollar className="sidebar-icon" /> Giving</a></li>
            <li><a> <MdOutlineGroups className="sidebar-icon" /> Groups</a></li>
            <li><a> <FiMessageSquare className="sidebar-icon" /> Messages</a></li>
        </ul>

        <div className="sideBar-bottom">
            <a>Settings</a>
            <div className="user">
                <h2 className="profile">DK</h2>
                <h1 className='profile-text'>
                    Daniel Kevin
                    <span>Lead Pastor</span>
                </h1>               
            </div>
        </div>

    </div>
    </>
  )
}

export default Sidebar;