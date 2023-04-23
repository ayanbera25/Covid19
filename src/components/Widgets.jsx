import React from "react";

const Widgets = (props)=> {
    return(
        <>
        <div className="eachWidget">
        <h3>{props.name} Cases</h3>
        <h2>{props.value}</h2>
        </div>
        
        </>
    )
}

export default Widgets;