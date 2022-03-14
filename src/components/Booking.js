import React from 'react';
import location from '../images/icons/location.svg'
import calendar from '../images/icons/calendar.svg'
import person from '../images/icons/person.svg'
import Login from "./Login";
import RemindPass from "./RemindPass";
import SmallMenu from "./SmallMenu";
import {useSelector} from "react-redux";

const Booking = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="booking" style={{display : isMenuShown ? 'none' : 'block'}}>
            <div className="container">

                <h1 className="booking__title">Find your perfect <br/> place to stay</h1>
                <p className="booking__subtitle">Search for hotels, hostels and apartments in Central Asia and the CIS
                    countries. Search for hotels, hostels and <br/> apartments in Central Asia and the CIS countries.
                    Search
                    for
                    hotels, hostels and <br/>apartments in Central Asia and the CIS countries</p>

                <p className="booking__subtitle">
                    Компания Silkway предоставляет большой выбор отелей, хостелов и апартаментов в Центральной Азии и странах СНГ.
                </p>

                <form className="booking__form">

                    <div className="booking__el">
                        <img src={location} alt="location" className="booking__icon"/>
                        <div>
                            <label htmlFor="" className="booking__label">Location</label>
                            <input type="text" placeholder="Kyrgyz Republic" className="booking__input"/>
                        </div>
                    </div>

                    <div className="booking__el">
                        <img src={calendar} alt="location" className="booking__icon"/>
                        <div>
                            <label htmlFor="" className="booking__label">Check in</label>
                            <input type="date" placeholder="22-10-2023" className="booking__input"/>
                        </div>
                    </div>

                    <div className="booking__el">
                        <img src={calendar} alt="location" className="booking__icon"/>
                        <div>
                            <label htmlFor="" className="booking__label">Check out</label>
                            <input type="date" placeholder="22-11-2023" className="booking__input"/>
                        </div>
                    </div>

                    <div className="booking__el">
                        <img src={person} alt="location" className="booking__icon"/>
                        <div>
                            <label htmlFor="" className="booking__label">Rooms for</label>
                            <input type="text" placeholder="4 person" className="booking__input"/>
                        </div>
                    </div>

                    <div className="booking__el">
                        <button className="booking__btn">Search</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Booking;