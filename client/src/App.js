import { useEffect, useState } from "react";
import { Route, Link, useHistory} from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Home from "./components/Home";
import AllHabits from "./components/AllHabits";
import Form from "./components/Form";


function App() {
  
  const [dailyHabits, setDailyHabits] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const getDailyHabits = async () => {
      const resp = await axios.get(baseURL, config);
      setDailyHabits(resp.data.records);
    };
    getDailyHabits();
  }, [dailyHabits]);

  const getAllHabits = () => {
     history.push("/allhabits")
    console.log("Saudi")
  }

  const addNew = () => {
    history.push("/form")
   console.log("Saudi")
 }

  return (
    <div className="App">
      
      <Route exact path="/">
        <Home getAllHabits={getAllHabits} addNew={addNew}/>
      </Route>
      <Route path="/allhabits">
        <AllHabits dailyHabits={dailyHabits}/>
      </Route>
      <Route path="/form">
        <Form addNew={addNew}/>
      </Route>
    </div>
  );
}
export default App;