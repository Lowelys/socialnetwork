import profileReducer, {addPostActionCreator} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

it('new post should be added', () => {
    let action = addPostActionCreator('social-network');
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        profile: null,
        status: ''
    };
    let newState = profileReducer({}, action)

});


