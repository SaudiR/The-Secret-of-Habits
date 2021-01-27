import { Link } from "react-router-dom";

const AllHabits = (props) => {
  return (
    <div className="list">
      <h1 className="allHabits">Habits</h1>
      {/*  created a new array that calls all habits  */}
      {props.dailyHabits.map((habit) => {
        return (
        <div>
            <Link
              style={{
                textDecoration: 'none',
                color: '#323031',
                //  each item in the array links to each individual habit
              }} to={`/habit/${habit.id}`}>{habit.fields.habit}</Link>
        </div>
      )})} 
    </div>
  )
}
export default AllHabits;

