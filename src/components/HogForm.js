import React, {useState} from 'react';

function HogForm({ onFormSubmit }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [weight, setWeight] = useState("")
    const [medal, setMedal] = useState("")
    const [greased, setGreased] = useState(true)

    function handleChange(event , setter) {
        setter(event.target.value)
    }

    const newPigItem ={
        name: name,
        image: image,
        specialty: specialty,
        weight: weight,
        "highest medal achieved" : medal,
        greased: greased
    }


    return(
        <form style={{padding: "30px"}} onSubmit={(event, item)=>onFormSubmit(event, newPigItem)}>
            <input onChange={(event, setter)=> handleChange(event,setName)} type="text" name="name" placeholder="Name..." value={name}></input>
            <input onChange={(event, setter)=> handleChange(event, setImage)}type="text" name="image" placeholder="Image URL..." value={image}></input>
            <input onChange={(event, setter)=> handleChange(event, setSpecialty)} type="text" name="specialty" placeholder="Specialty..." value={specialty}></input>
            <input onChange={(event, setter)=> handleChange(event, setWeight)} type="text" name="weight" placeholder="Weight..." value={weight}></input>
            <input onChange={(event, setter)=> handleChange(event, setMedal)} type="text" name="highestMedalAchieved" placeholder="Highest Medal Achieved..." value={medal}></input> 
            <label htmlFor="greaseyPig">Greased? </label>
            <select onChange={(event, setter)=> handleChange(event, setGreased)} id="greaseyPig">
                <option value="true">true</option>
                <option value="true">false</option>
            </select>
            <input type="submit"></input>
        </form>
    )
}

export default HogForm