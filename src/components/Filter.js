import {React, useState, useEffect } from "react";

function Filter ({ dogs, setDogs, srcDogs, handleRevert }) {

    const [filterGood, setFilterGood] = useState(false) 

    

    useEffect(() => {
        if (filterGood) {
            // return an array with just the good bois
            const goodBois = dogs.filter(dog => dog.isGoodDog === true)
            console.log(goodBois)
            setDogs(goodBois)
        } else {
            // display all, as usual. But how do I do this without making another patch request?
            // setDogs(srcDogs) // This doesn't work because then all future invocations of dog will go off the original list contained, and it does not account for patch reqeuests....
            // Maybe I can toggle something in the dependency array? Another thing?
            handleRevert();
        }
    }, [filterGood]) // Using this outside of the handleClick function. UseEffect have to be in React componenents... 

    function handleClick() {
        setFilterGood(!filterGood)
        //set dogs to only dogs that are good bois
    }


    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleClick}>Filter good dogs: OFF</button>
        </div>
    )
}

export default Filter