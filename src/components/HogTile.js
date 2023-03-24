import React, {useState} from "react";
import DisplayDetails from "./DisplayDetails.js"



function HogTile({ onHide, name, image, specialty, greased, weight, highestMedalAchieved }) {
    const [isClicked, setIsClicked] = useState(false)
    function handleClick() {
        setIsClicked(!isClicked)
    }
    
    return(
        <div className="ui card" onClick={handleClick} >
            <p>{name}</p>
            <img src={image} alt="pig" className="ui image"></img>
            {isClicked? <DisplayDetails specialty={specialty} greased={greased} weight={weight} highestMedalAchieved={highestMedalAchieved} /> : null}
            <button onClick={onHide}>Hide Pig</button>
        </div>
    )
}

export default HogTile