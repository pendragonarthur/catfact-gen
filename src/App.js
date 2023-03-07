import Axios from "axios";
import { useEffect, useState } from "react";
import "./App.sass";
import { BsGithub } from "react-icons/bs";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <div className="title-container">
        <h1>CatFact Generator!</h1>
        <p>Click on the button 'Meow' to generate cat fact.</p>
      </div>
      <div className="cat-container">
        <button onClick={fetchCatFact}>Meow!</button>
        <p>{catFact}</p>
      </div>
      <div className="github-icon">
        <a
          href="http://github.com/pendragonarthur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
          <p>Arthur Quaresma</p>
        </a>
      </div>
    </div>
  );
}

export default App;
