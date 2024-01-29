import React from "react";
import '../style/Destinations.css'
function Destinations() {
    return(
    <div className="Full_Destinations">
        <h1 className="Destinations_title">Top Destinations</h1>
        <div className="Destinations">
            <div className="contener">
                <div className="image">
                    <img className="pic1" src="/images/Kashmir Pic.png" alt="Kashmir Pic"/>
                    <img className="heart" src="/images/ph_heart.png" alt="Heart" />
                </div>
                <div className="Destinations_text">
                    <h1 className="subtitle">Kashmir</h1>
                    <p className="About">5 nights 6 days tour package</p>
                    <p className="days">1-7 Feb</p>
                    <p className="Charge">₹22,375</p>
                    <p className="rating">★4.40</p>
                    <a href="#" className="View-details">View details></a>
                </div>
            </div>
            <div className="contener">
            <div className="image">
                    <img className="pic2" src="/images/Rajasthan Pic.png" alt="Kashmir Pic"/>
                    <img className="heart" src="/images/ph_heart.png" alt="Heart" />
                </div>
                <div className="Destinations_text">
                    <div className="Destinations_text-left">
                        <h1 className="subtitle">Rajasthan</h1>
                        <p className="About">7 nights 8 days tour package</p>
                        <p className="days">12-20 Feb</p>
                        <p className="Charge">₹22,375</p>
                    </div>
                    <div className="Destinations_text-right">
                        <p className="rating">★4.79</p>
                        <a href="#" className="View-details">View details></a>
                    </div>
                </div>
                
            </div>
            <div className="contener">
            <div className="image">
                    <img className="pic2" src="/images/Sikkim Pic.png" alt="Kashmir Pic"/>
                    <img className="heart" src="/images/ph_heart.png" alt="Heart" />
                </div>
                <div className="Destinations_text">
                    <h1 className="subtitle">Sikkim</h1>
                    <p className="About">2 nights 3 days tour package</p>
                    <p className="days">3-7 Mar</p>
                    <p className="Charge">₹22,375</p>
                    <p className="rating">★4.49</p>
                    <a href="#" className="View-details">View details></a>
                </div>
                
            </div>
            <div className="contener">
            <div className="image">
                    <img className="pic2" src="/images/Kerala Pic.png" alt="Kashmir Pic"/>
                    <img className="heart" src="/images/ph_heart.png" alt="Heart" />
                </div>
                <div className="Destinations_text">
                    <h1 className="subtitle">Kerala</h1>
                    <p className="About">5 nights 6 days tour package</p>
                    <p className="days">1-7 Feb</p>
                    <p className="Charge">₹22,375</p>
                    <p className="rating">★4.35</p>
                    <a href="#" className="View-details">View details></a>
                </div>
            </div>
        </div>

    </div>
        
    );
}
export default Destinations;