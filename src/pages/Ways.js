import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from './Home'
import Hotels from "./Hotels";
import News from "./News";
import SignUp from "./SignUp";
import MyArea from "./MyArea";
import PrivateRoute from "../accessHelpers/PrivateRoute"

export default function Ways() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route path="/news" element={<News/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/hotels" element={<Hotels/>}/>

            // private route declaration for MyArea Table component
            <Route exact path='/my-area' element={<PrivateRoute/>}>
                <Route exact path='/my-area' element={<MyArea/>}/>
            </Route>



            {/*<Route path="/hotels" element={*/}
            {/*    <PrivateRoute exact path="/hotels" >*/}
            {/*        <Hotels/>*/}
            {/*    </PrivateRoute>*/}
            }/>


        </Routes>
    )
}
