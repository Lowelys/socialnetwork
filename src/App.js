import React from 'react';
import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer />}/>
                <Route path='/profile/:userId?'
                       render={ () => <ProfileContainer />}/>
                <Route path='/users'
                       render={ () => <UsersContainer />}/>
                <Route path='/login'
                       render={ () => <LoginPage />}/>
            </div>
        </div>
    );
};

export default App;

