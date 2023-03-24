import React, {useState} from "react";
import DisplayDetails from "./DisplayDetails.js"


function HogTile({ name, image, specialty, greased, weight, highestMedalAchieved }) {
    const [isClicked, setIsClicked] = useState(false)
    function handleClick() {
        setIsClicked(!isClicked)
    }
    
    return(
        <div className="ui eight wide column" onClick={handleClick} >
            <p>{name}</p>
            <img src={image} alt="pig"></img>
            {isClicked? <DisplayDetails specialty={specialty} greased={greased} weight={weight} highestMedalAchieved={highestMedalAchieved} /> : null}
            
        </div>
    )
}

export default HogTile