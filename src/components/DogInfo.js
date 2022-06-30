import React from "react";

function DogInfo({ dogInfo, setDogInfo, handleRevert }) {

    const {id, name, isGoodDog, image} = dogInfo[0]

    function handleClick() {
        // patch request to that specific id

        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({isGoodDog: !isGoodDog})
        })
            .then(r => r.json())
            .then(change => {
                setDogInfo([change]) 
                handleRevert()}) // The problem with this line is that it will then display all dogs if changing from the filtered page. 

        // Need to then update dog info 
    }
    

    return (
        <div id="dog-info">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button onClick={handleClick}>{isGoodDog ? 'Good Dog' : 'Bad Dog' }</button>
        </div>
    )
}

export default DogInfo;