import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Self-Improvement</h1>
      <h3></h3>
      {/* <Link style={{ textDecoration: 'none' }} to="/progress"><button>Progress Report</button></Link> */}
      <Link style={{ textDecoration: 'none' }}to="/AllHabits"><button>Habits</button></Link>
      <Link style={{ textDecoration: 'none' }}to="/form"><button>Add Additional Habits</button></Link>
    </div>
  )
}
export default Home;