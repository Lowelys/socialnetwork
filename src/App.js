import React from 'react';
import './App.css';


const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>

        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a hfref='#'>Home </a>
            <a hfref='#'>news feed</a>
            <a hfref='#'>Message </a>
        </div>


    );
}
export default App;
