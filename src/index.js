import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: 'My first post', likeCount: 23},
    {id: 3, message: 'My first post', likeCount: 23},
    {id: 4, message: 'My first post', likeCount: 23},
    {id: 5, message: 'My first post', likeCount: 23},
    {id: 6, message: 'My first post', likeCount: 23},
]

let dialogs = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Sergey'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Bue'},
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
