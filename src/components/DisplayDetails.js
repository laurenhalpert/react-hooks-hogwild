import React from "react"

function DisplayDetails({ specialty, weight, greased, highestMedalAchieved}) {
    return(
        <ul id="details">
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight}</li>
            <li>Greased?: {greased.toString()}</li>
            <li>Highest Medal Achieved: {highestMedalAchieved}</li>
        </ul>
    )
}

export default DisplayDetails