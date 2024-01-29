import React from "react";
import Navbar from './Navbar';
import Useroutput from "./User_output";
import Search from "./Search";
import Destinations from "./Destinations";
import Recommended from "./Recommended";
import DestinationWeek from "./Destination_week";
import Reason from "./Reason";

function Home(){
    return(
        <div>
            <Navbar/>
            <Useroutput/>
            <Search/>
            <Destinations/>
            <Recommended/>
            <DestinationWeek/>
            <Reason/>
        </div>
        
    );
}
export default Home;