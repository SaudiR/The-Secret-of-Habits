const AllHabits = (props) => {
  return (
    <div>
      {props.dailyHabits.map((habit) => {
        return <div>{habit.fields.habit }</div>
      })}
    </div>
  )
}
export default AllHabits;