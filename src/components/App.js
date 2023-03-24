/*
App [hogs]
|
|-Nav
	|-Filter ()
	|-Sort ()
|-HogTile (click) [specialty, weight, greased, highestMedalAchieved]

elements: 
hogs(const)
name (const)
image (const)
specialty (const)
weight(const)
greased(const)
highestMedalAchieved(const)

BONUS elements:
isHidden (~)
visibleHogs(~)

to hide a hog, user clicks a button on the hog tile and pigs state gets set to filtered HogList
-setHide and hide need to be in app

newPigItem = {
	name: newName,
	image: newImage,
	specialty: newSpecialty,
	weight: newWeight,
	highestMedalAchieved: newHighestMedalAchieved
}
setPigs([...pigs, newPigItem])
function handleSubmit(event, newPigItem){
	event.preventDefault();
	setPigs([...pigs, newPigItem])
}
-onSubmit
--prevent default
--create newPigItem to get passed into a function
	---in App onFormSubmit={handleSubmit}
	---in Form onSubmit={()=> onFormSubmit(newPigItem)}

*/

import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Filter from "./Filter";
import hogs from "../porkers_data";
import HogForm from "./HogForm";


function App() {
	const [pigs, setPigs] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [isSorted, setIsSorted] = useState(false)
	const [isName, setIsName] = useState(false)
	
	
	function handleHide(name) {
		setPigs(pigs.filter(pig => pig.name !== name))
		
	}
	
	
	function handleFilter() {
		const greasedPigs= hogs.filter(hog=> hog.greased === true )
		
		setPigs(greasedPigs)
		setIsGreased(!isGreased)
	}
	
	//const hogsToDisplay = isSorted? (isName? sortName(): sortWeight()) : hogsVisible


	function sortName() {
		function compare (a,b) {
			if (a.name < b.name) {
				return -1;
			} else if (a.name> b.name) {
				return 1;
			}
			return 0
		}
		const sortedHogs = pigs.sort(compare)
		setPigs(sortedHogs)
		setIsSorted(!isSorted)
		setIsName(!isName)
		
	}

	function sortWeight() {
		function compareWeight (a,b) {
			if (a.weight < b.weight) {
				return -1;
			} else if (a.weight> b.weight) {
				return 1;
			}
			return 0
		}
		const sortedWeightHogs = pigs.sort(compareWeight)
		console.log(sortedWeightHogs)
		setIsSorted(!isSorted)
		setPigs(sortedWeightHogs)
		return sortedWeightHogs;
		
		
	}

	function handleSubmit(event, newPigItem){
		event.preventDefault();
		setPigs([...pigs, newPigItem])
	}
	
	return (
		<div className="App">
			<Nav />
			<Filter onSetGreasedPigs={handleFilter}/>
			<button onClick={sortName}>Sort by Name</button>
			<button onClick={sortWeight}>Sort by Weight</button>
			<HogForm onFormSubmit={handleSubmit}/>
			<div className="ui grid container">
				{pigs.map(hog =>
				 	<HogTile key={hog.name} onHide={()=>handleHide(hog.name)} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedalAchieved={hog["highest medal achieved"]}/>)}
			</div>
			

		</div>
	);
}

export default App;
