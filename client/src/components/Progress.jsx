
// import { useEffect, useState } from "react";

// const Progress = (props) => {
//   const [date, setDate] = useState("")
//   const [habitsbyDate, setHabitsbyDate] = useState([])
//   useEffect(() => {
//     const filteredHabits = props.dailyHabits.
//       filter((habit) => { 
//         console.log(date)
//         console.log(habit.fields.time)
//         return habit.fields.time === date
//       })
//     setHabitsbyDate(filteredHabits)
//   }, [date])


//   console.log(habitsbyDate)
//   return (
//     <div>
//       <input type="date" onChange={(e) => setDate(e.target.value)} />
//       {habitsbyDate.map((habit) => {
//         return (
//         <div>
//           {habit.fields.habit}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default Progress;