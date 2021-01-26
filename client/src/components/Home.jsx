import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Self-Improvement</h1>
      <h3></h3>
      <Link style={{
        textDecoration: 'none',
        position: 'relative',
        left: '5px',
        right: '20px',
        bottom: '0%',
        top:' 90%',
      }} to="/AllHabits"><button>Habits</button></Link>
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
  )
}
export default Home;