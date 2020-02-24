import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';

const Navigation = ()=> {
    return (
        <nav className="flex flex-row justify-between">
            <Link className="logo" to="/">
                <Logo />
            </Link>
            
            <ul className="flex flex-row justify-around nav-links f2 b link white underline pa3 courier">
                <Link className="grow f2 b link dim white" to="ColorRecognition">
                    <li>Color</li>
                </Link>
                <Link className="grow f2 b link dim white" to="FaceRecognition">
                    <li>Face</li>
                </Link>
                <Link className="grow f2 b link dim white" to="FamousRecognition">
                    <li>Famous</li>
                </Link>
                <Link className="grow f2 b link dim white" to="FoodRecognition">
                    <li>Food</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;