import React from "react";
import '../style/User_output.css';
function Useroutput(){
    return(
        <ul className="User_text">
            <a className="dis" href="Discover.js">Discover</a>
            <a className="plan" href="Planning.js">Planning</a>
            <a className="review" href="Review.js">Review</a>
        </ul>
    );
}
export default Useroutput;