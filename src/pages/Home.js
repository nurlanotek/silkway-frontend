import React from 'react';
import Booking from "../components/Booking";
import BestHotels from "../components/BestHotels";
import Facilities from "../components/Facilities";
import Map from "../components/Map";
import Login from "../components/Login";
import RemindPass from "../components/RemindPass";
import {useSelector} from "react-redux";

const Home = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);


    return (
        <div >
            <Booking/>
            <Login/>
            <RemindPass/>
            <BestHotels/>
            <Facilities/>
            <Map/>


        </div>
    );
};

export default Home;