const Home = (props) => {
  return (
    <div className="home">
      <h1>The Secret of Habits</h1>
      <h3>Habit formation is the process by which a behavior, through regular repetition, becomes automatic or habitual. ... A habit may initially be triggered by a goal, but over time that goal becomes less necessary and the habit becomes more automatic.</h3>
      <button>Progress Report</button>
      <button onClick={props.getAllHabits}>List of Daily Habits</button>
      <button onClick={props.addNew}>Add Additional Habits</button>
    </div>
  )
}
export default Home;