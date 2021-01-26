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
    
    
    const fields = {
      habit: habit,
      duration: duration,
      benefits: benefits,
    };
    
    await axios.post(baseURL, { fields }, config);
    
    console.log("success!");
    history.push("/allhabits")
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Add a New Habit!</h4>
      <label htmlFor="habit">Habit:</label>
      <input
        name="habit"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        style={{borderColor: '#323031'}}
      />
      <label htmlFor="duration">Duration:</label>
      <input
        name="duration"
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{borderColor: '#323031'}}
      />
      <label htmlFor="benefits">Benefits:</label>
      <textarea
        name="benefits"
        type="text"
        value={benefits}
        onChange={(e) => setBenefits(e.target.value)}
        style={{borderColor: '#323031'}}
      />
      <br />
        <button type="submit" className="formButton">Submit</button>
    </form>
  );
}
export default Form;