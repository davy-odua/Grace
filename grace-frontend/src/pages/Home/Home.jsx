import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="sidebar"><Sidebar /></div>
        <div className="overview">
            <h1>Overview</h1>
        </div>
    </div>
    </>
  )
}

export default Home;