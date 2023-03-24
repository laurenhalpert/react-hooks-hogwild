import React from "react";

function Filter({ onSetGreasedPigs }) {
    function handleFilterClick() {
        onSetGreasedPigs()
    }
    
    return(
        <button onClick={handleFilterClick}>Show me only greased pigs</button>
    )
}

export default Filter