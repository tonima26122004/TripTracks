import React from "react";
import '../style/Navbar.css';

function Navbar(){
    return(
        <nav>
            <div className="Logo" >
               <a href="Home.js"><img  src="/images/TripTracks.png" alt="Logo"/></a> 
            </div>
            <div className="rightside">
                <img className="Live" src="/images/Live.svg" alt="Live"/>
                <a href="WeatherHub.js">WeatherHub</a>
                <img className="notification" src="/images/Notification.svg" alt="notification"/>
                <img className="User" src="/images/User_pof.svg" alt="Usre_profile"/>
            </div>
        </nav>
    );
}
export default Navbar;