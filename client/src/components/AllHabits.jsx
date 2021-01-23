import { Link } from "react-router-dom";

const AllHabits = (props) => {
  return (
    <div className="list">
      {props.dailyHabits.map((habit) => {
        return <div>
          <Link to={`/habit/${habit.id}`}>{habit.fields.habit}</Link>
          
        </div>
      })}
    </div>
  )
}
export default AllHabits;