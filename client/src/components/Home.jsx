import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>The Secret of Habits</h1>
      <h3>Habit formation is the process by which a behavior, through regular repetition, becomes automatic or habitual. ... A habit may initially be triggered by a goal, but over time that goal becomes less necessary and the habit becomes more automatic.</h3>
      {/* <Link style={{ textDecoration: 'none' }} to="/progress"><button>Progress Report</button></Link> */}
      <Link style={{ textDecoration: 'none' }}to="/AllHabits"><button>List of Daily Habits</button></Link>
      <Link style={{ textDecoration: 'none' }}to="/form"><button>Add Additional Habits</button></Link>
    </div>
  )
}
export default Home;