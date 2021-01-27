import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Habit = (props) => {
  const [singleHabit, setSingleHabit] = useState(null)
  const params = useParams()
  useEffect(() => {
    const results = props.dailyHabits.find(habit => (
      params.id === habit.id
    ))
    setSingleHabit(results)
  }, [props.dailyHabits])
  
  if (!singleHabit) {
    return <div>loading</div>
  } else {
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

        <div className="imageContainer">
  
         <img className="image" src={singleHabit.fields.images} />

        </div>
        
      
      </div>
    )
  }
}
export default Habit;