import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";


function Form(props) {

  const [habit, setHabit] = useState("");
  const [duration, setDuration] = useState("");
  const [benefits, setBenefits] = useState("");
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // creature object have all the properties from state
    const fields = {
      habit: habit,
      duration: duration,
      benefits: benefits,
    };
    // axios call to POST the new creature
    await axios.post(baseURL, { fields }, config);
    // toggling our GET request
    console.log("success!");
    history.push("/allhabits")
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a New Habit!</h4>
      <label htmlFor="habit">Habit:</label>
      <input
        name="habit"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <label htmlFor="duration">Duration:</label>
      <input
        name="duration"
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <label htmlFor="benefits">Benefits:</label>
      <input
        name="benefits"
        type="text"
        value={benefits}
        onChange={(e) => setBenefits(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;