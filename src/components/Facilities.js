import React from 'react';
import asia from "../images/icons/asia.png";
import mountain from "../images/icons/mountain.png";
import car from "../images/icons/car-key.png";
import conference from "../images/icons/conference.png";
import {useSelector} from "react-redux";

const Facilities = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="facilities" style={{display : isMenuShown ? 'none' : 'block'}}>
            <div className="container facilities__subcontainer">

            <div className="facilities__tex-div">
                <h3 className="facilities__title">
                    We do our best facilities provide you
                </h3>
                <p className="facilities__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                    facere, harum. Eaque, est, veritatis. Aspernatur aut dolore enim, esse facere laboriosam molestiae
                    nam nisi nulla, odio perferendis, quisquam quo rerum?   </p>

                <button className="facilities__contact-btn">Contact now</button>
            </div>
            <div className="facilities__fac-div">
                <div className="facilities__facility">
                    <img src={asia} alt="asia" className="facilities__icon"/>

                     <p>Hotel reservations in Asia countries</p></div>
                <div className="facilities__facility">
                    <img src={mountain} alt="asia" className="facilities__icon"/>

                    <p>Hotel booking in the Caucasus countries</p>
                </div>
                <div className="facilities__facility">
                    <img src={car} alt="asia" className="facilities__icon"/>

                    <p>Booking a car (of any category) with a driver</p>
                </div>
                <div className="facilities__facility">
                    <img src={conference} alt="asia" className="facilities__icon"/>

                    <p>Organization of conference services (MICE)</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Facilities;