
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Progress = (props) => {
  const [date, setDate] = useState("")
  const [filteredHabits, setFilteredHabits] = useState([])
  useEffect(() => {
    if (date !== "") {
      const results = props.dailyHabits.
        filter((habit) => {
          console.log(date)
          console.log(habit.fields.time)
          return habit.fields.time === date
        })
      setFilteredHabits(results)
    }  
    
    if (props.search !== "") {
      const results = props.dailyHabits.filter((habit) => {
        // console.log(habit.fields.habit)
        return habit.fields.habit.toLowerCase().includes(props.search.toLowerCase())
      }) 
      setFilteredHabits(results)
    }
  }, [date, props.search])

  // console.log(habitsbyDate)
  return (
    <div>
      <input
        type='text'
        name='search'
        value={props.search}
        onChange={props.handleChange}
      />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      {filteredHabits.map((habit) => {
        return (
          <div>
            <Link to={`/habit/${habit.id}`}> 
              {habit.fields.habit}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default Progress;