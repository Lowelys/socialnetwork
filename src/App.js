import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";


const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer />}/>
                    <Route path='/profile' render={() =>
                        <Profile /> }/>
                </div>
            </div>

    );
}

export default App;

