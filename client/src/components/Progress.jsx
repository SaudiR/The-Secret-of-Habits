
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Progress = (props) => {
  const [date, setDate] = useState("")
  const [filteredHabits, setFilteredHabits] = useState([])
  useEffect(() => {
    if (date !== "") {
      const results = props.dailyHabits.
        filter((habit) => {
          return habit.fields.time === date
        })
      setFilteredHabits(results)
    }  
    // create a new array with elements that passed the test implemented by the provided function.
    if (props.search !== "" && props.dailyHabits) {
      const results = props.dailyHabits.filter((habit) => {
        return habit.fields.habit.toLowerCase().includes(props.search.toLowerCase())
      }) 
      setFilteredHabits(results)
    }
  }, [date, props.search])


  return (
    <div className="searchPage">
      <h1>Search for a Habit</h1>
      <input className="searchBar"
        type='text'
        name='search'
        value={props.search}
        onChange={props.handleChange}
      />
      {/* <input className="dateSearch" type="date" onChange={(e) => setDate(e.target.value)} /> */}
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