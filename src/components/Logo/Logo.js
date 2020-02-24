import React from 'react';
import Tilt from 'react-tilt';
import computer from './computer.png';
import './Logo.css'

const Logo = ()=> {
    return (
        <div className='ma2 flex flex-row '>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa3">
                    <img src={ computer } alt="logo"/>
                </div>
            </Tilt>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa3">
                <h1 className="purple">Machine Predictions</h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;