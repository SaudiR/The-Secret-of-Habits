import { useEffect, useState } from "react";
import { Route, Link, useHistory} from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Home from "./components/Home";
import AllHabits from "./components/AllHabits";
// import Form from "./components/Form";


function App() {
  
  const [dailyHabits, setDailyHabits] = useState([]);
  const history = useHistory()
  useEffect(() => {
    const getDailyHabits = async () => {
      const resp = await axios.get(baseURL, config);
      setDailyHabits(resp.data.records);
    };
    getDailyHabits();
  }, []);

  const getAllHabits = () => {
     history.push("/allhabits")
    console.log("Saudi")
  }

  return (
    <div className="App">
      
      <Route exact path="/">
        <Home getAllHabits={getAllHabits}/>
      </Route>
      <Route path="/allhabits">
        <AllHabits dailyHabits={dailyHabits}/>
      </Route>
    </div>
  );
}
export default App;