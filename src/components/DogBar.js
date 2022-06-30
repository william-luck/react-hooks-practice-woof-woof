import React from "react";
import Dog from "./Dog";

function DogBar({ dogs, setDogInfo }) {

    function handleDogClick(name) {
        const matchDog = dogs.filter(dog => dog.name === name)
        setDogInfo(matchDog)
    }

    return (
        <div id="dog-bar">
            {dogs.map(dog => {
                return <Dog key={dog.id} dog={dog} onDogClick={handleDogClick} />
            })}
        </div>
    )
}

export default DogBar;