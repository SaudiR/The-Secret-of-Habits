import { Link } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <Link style={{textDecoration: 'none', color: 'white'}} to="/">Home Page</Link>
      <Link style={{textDecoration: 'none' , color: 'white'}}to="/allHabits">List of Habits</Link>
      <Link style={{textDecoration: 'none' , color: 'white'}}to="/form">Add a New Habit</Link>
    </nav>
  );
}

export default Nav;

