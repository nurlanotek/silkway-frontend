import './App.scss';
import Header from "./components/Header";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Ways from "./pages/Ways";
import SmallMenu from "./components/SmallMenu";


function App() {
    const showLogin = useSelector(state => state.store.showLogin);
    const dispatch = useDispatch();
    console.log(showLogin);
    const loading = useSelector(state => state.registration.loading);



    return (
        <div className="App"
        style={{opacity : loading ? '50%' : '',
       }}>
            <Header/>
            <SmallMenu/>


            <Ways/>

            {/*<Footer/>*/}

        </div>
    );
}

export default App;


