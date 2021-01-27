import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";


function Form(props) {

  const [habit, setHabit] = useState("");
  const [duration, setDuration] = useState("");
  const [benefits, setBenefits] = useState("");
  const [images, setImages] = useState("");
  const history = useHistory()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const fields = {
      habit: habit,
      duration: duration,
      benefits: benefits,
      images: images === ""
          ? "https://cdn.powerofpositivity.com/wp-content/uploads/2020/04/einstein-quote.jpg"
        : images,
    };
    
    await axios.post(baseURL, { fields }, config);
    
    props.setToggle(prev => !prev)
    history.push("/allhabits")
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Add a New Habit!</h4>
      <label htmlFor="habit">Habit:</label>
      <input className="habitDurationTextarea"
        name="habit"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)} />
      
      <label htmlFor="duration">Duration:</label>
      <input className="habitDurationTextarea"
        name="duration"
        type="text"
        placeholder="min. / hrs"
        value={duration}
        onChange={(e) => setDuration(e.target.value)} />
      
      <label htmlFor="images">Image:</label>
        <input id="image"
          name="images"
          type="text"
          placeholder="URL"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />
      
      <label htmlFor="benefits">Benefits:</label>
      <textarea id='benefitsTextarea'
        name="benefits"
        type="text"
        value={benefits}
        onChange={(e) => setBenefits(e.target.value)}/>
      <br />
        <button type="submit" className="formButton">Submit</button>
    </form>
  );
}
export default Form;