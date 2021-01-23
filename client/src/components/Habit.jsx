import { useParams } from "react-router-dom";

const Habit = (props) => {
  const params = useParams()
  const singleHabit = props.dailyHabits.find(habit => (
    params.id === habit.id
  ))
  console.log(singleHabit)
  return (
    <div>
      <div>{singleHabit.fields.habit}</div>
      
      <div>{singleHabit.fields.duration}</div>
      
      <div>{singleHabit.fields.benefits}</div>
     </div>
  )
}
export default Habit;