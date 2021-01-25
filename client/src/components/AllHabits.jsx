import { Link } from "react-router-dom";

const AllHabits = (props) => {
  return (
    <div className="list">
      <h1>Habits</h1>
      {props.dailyHabits.map((habit) => {
        return (
        <div>
            <Link style={{ textDecoration: 'none' }}to={`/habit/${habit.id}`}>{habit.fields.habit}</Link>
        </div>
      )})} 
    </div>
  )
}
export default AllHabits;

