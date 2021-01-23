import { Link } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/allHabits">List of Habits</Link>
      <Link to="/form">Add a New Habit</Link>
    </nav>
  );
}

export default Nav;

