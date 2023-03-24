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

*/

import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Filter from "./Filter";
import hogs from "../porkers_data";


function App() {
	const [pigs, setPigs] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [isSorted, setIsSorted] = useState(false)
	const [isName, setIsName] = useState(false)
	
	const greasedPigs= hogs.filter(hog=> hog.greased === true )
	console.log(greasedPigs)
	const hogsVisible = isGreased? greasedPigs: pigs
	
	function handleFilter() {
		setPigs(greasedPigs)
		setIsGreased(!isGreased)
	}
	
	const hogsToDisplay = isSorted? (isName? sortName(): sortWeight()) : hogsVisible


	function sortName() {
		function compare (a,b) {
			if (a.name < b.name) {
				return -1;
			} else if (a.name> b.name) {
				return 1;
			}
			return 0
		}
		const sortedHogs = hogsVisible.sort(compare)
		setIsSorted(!isSorted)
		setIsName(!isName)
		return sortedHogs;
		
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
		const sortedWeightHogs = hogsVisible.sort(compareWeight)
		console.log(sortedWeightHogs)
		setIsSorted(!isSorted)
		return sortedWeightHogs;
		
		
	}
	
	return (
		<div className="App">
			<Nav />
			<Filter onSetGreasedPigs={handleFilter}/>
			<button onClick={sortName}>Sort by Name</button>
			<button onClick={sortWeight}>Sort by Weight</button>
			<div className="ui grid container">
				{hogsToDisplay.map(hog =>
				 	<HogTile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedalAchieved={hog["highest medal achieved"]}/>)}
			</div>
			

		</div>
	);
}

export default App;
