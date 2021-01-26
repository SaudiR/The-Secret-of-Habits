import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
    <div className="home">
      <h1>Self-Improvement</h1>
      </div>
      <h3></h3>
      <div className="buttons">
      <Link style={{
        textDecoration: 'none',
        position: 'relative',
        left: '5px',
        right: '20px',
        bottom: '0%',
        top:' 90%',
        }} to="/AllHabits"> <button>Self Enhancement</button></Link>
        
      <Link style={{
        textDecoration: 'none',
        position: 'relative',
        left: '5px',
        right: '20px',
        bottom: '0%',
        top:' 90%',
      }} to="/progress"><button>Search for Habits</button></Link>
      <Link style={{
        textDecoration: 'none',
        position: 'relative',
        left: '5px',
        right: '20px',
        bottom: '0%',
        top:' 90%',
      }} to="/form"><button>Add Additional Habits</button></Link>
      </div>
      </div>
  )
}
export default Home;