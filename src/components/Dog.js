import React from "react";

function Dog ({ dog, onDogClick}) {

    const {id, name, isGoodDog, image} = dog

    function handleClick() { 
        onDogClick(name)
    }

    

    return (
        <span onClick={handleClick}>
            {name}
        </span>
    )
}

export default Dog