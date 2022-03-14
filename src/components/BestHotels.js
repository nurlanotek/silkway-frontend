import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

const BestHotels = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="besthotels" style={{display : isMenuShown ? 'none' : 'block'}}>
            <div className="container">

                <h3 className="besthotels__title">Our most popular hotels</h3>

                <div className="besthotels__under-title-content">
                    <p className="besthotels__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                        aspernatur, blanditiis est et excepturi fuga harum <br/>impedit iste laborum minus nemo, nobis
                        numquam
                        obcaecati quaerat quo sequi vel velit vero!</p>
                    <button className="besthotels__view-btn">View all</button>

                </div>
                <div className="besthotels__cards">
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
        </div>
    );
};

export default BestHotels;