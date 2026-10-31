import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="sidebar"><Sidebar /></div>
        <div className="overview">
            <Navbar />
        </div>
    </div>

    </>
  )
}

export default Home;