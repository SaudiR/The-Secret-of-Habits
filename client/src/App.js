import { useEffect, useState } from "react";
import { Route, Link, useHistory} from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Home from "./components/Home";
import AllHabits from "./components/AllHabits";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Habit from "./components/Habit";
import Footer from "./components/Footer";
// import Progress from "./components/Progress";


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

  function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
}
  

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/allhabits">
        <AllHabits dailyHabits={dailyHabits}/>
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/habit/:id">
        <Habit dailyHabits={dailyHabits}/>
      </Route>
      {/* <Route path="/progress">
        <Progress dailyHabits={dailyHabits}/>
      </Route> */}
      <Footer />
    </div>
  );
}
export default App;