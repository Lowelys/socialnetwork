import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}
                                 addPost={props.addPost}/>}/>
                </div>
            </div>

    );
}

export default App;

