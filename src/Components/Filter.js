import React from "react";
import './filter.css'; 

let FilterTask = (props) => {
    function onFilterValueChange(event) {
        props.onFilterValueSelect(event.target.value)
    }

    return (
        <div className="filter-button">
            <h3>Want to Filter Your Tasks?</h3>
            <select className="filterBtn" name="complete" onChange={onFilterValueChange}>
                <option value = "all">All Tasks</option> 
                <option value = "complete">Completed</option> 
                <option value = "incomplete">InComplete</option> 
            </select>
        </div>);
}

export default FilterTask; 