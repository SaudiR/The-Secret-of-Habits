const Home = (props) => {
  return (
    <div>
      <h2>The Secret of Habits</h2>
      <button>Progress Report</button>
      <button onClick={props.getAllHabits}>List of Daily Habits</button>
      <button>Add Additional Habits</button>
      
    </div>
  )
}
export default Home;