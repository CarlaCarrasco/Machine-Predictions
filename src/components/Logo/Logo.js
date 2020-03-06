import React from 'react';
import Tilt from 'react-tilt';
import computer from './computer.png';
import './Logo.css'

const Logo = ()=> {
    return (
        <div className='ml2 mr2 mt2 mb0 flex flex-row '>
            <Tilt className="Tilt br2 shadow-2 logo-image" options={{ max : 25 }}>
                <div className="Tilt-inner pa1 pa3-ns">
                    <img src={ computer } alt="logo"/>
                </div>
            </Tilt>
            <Tilt className="Tilt logo-text" options={{ max : 25 }}>
                <div className="Tilt-inner pa3">
                <h1 className="purple">Machine Predictions</h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;