import { React, useState, useEffect} from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {

  const [dogs, setDogs ] = useState([])
  const [srcDogs, setSrcDogs] = useState([])
  const [dogInfo, setDogInfo] = useState(null)
  const [revert, setRevert] = useState(true)

  

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then (r => r.json())
      .then(src => {
        setDogs(src)
        setSrcDogs(src)  
      })
  }, [revert])

  function handleRevert () {
    setRevert(!revert)
  }


  return (
    <div className="App">
      <Filter dogs={dogs} setDogs={setDogs} srcDogs={srcDogs} handleRevert={handleRevert}/>
      <DogBar dogs={dogs} setDogInfo={setDogInfo}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {dogInfo ? <DogInfo dogInfo={dogInfo} setDogInfo={setDogInfo} handleRevert={handleRevert}/> : null}
      </div>
    </div>
  );
}

export default App;
