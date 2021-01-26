import { useParams } from "react-router-dom";

const Habit = (props) => {
  const params = useParams()
  const singleHabit = props.dailyHabits.find(habit => (
    params.id === habit.id
  ))
  console.log(singleHabit)
  return (
    <div>
      <div className='habit'>
        <h5>Habit: {singleHabit.fields.habit}</h5>
      </div>
      
      <div className='duration'>
        <h5>Duration: {singleHabit.fields.duration}</h5>
      </div>
      
      <div className='benefits'>
        <h5>Benefits: {singleHabit.fields.benefits}</h5>
      </div>

      Recommended Books 
      
     </div>
  )
}
export default Habit;