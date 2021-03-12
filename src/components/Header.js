import React from "react";

function Header(props) {
    return (
        <div className={"jumbotron"}>
            <h1>Employee Directory</h1>
            <input type="text" name= "search" onChange={props.handleInput}
            placeholder="Enter Employee Name"
            />
        </div>
    )
}
export default Header;