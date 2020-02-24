import React from 'react';
import './Home.css';

const Home = ({imageUrl})=> {
    return (
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Home Prediction</h1>
        </div>
        /*{/* <div classNameName='center ma'>
            <div classNameName='absolute mt2'></div>
            <img id='inputImage' alt='' src={imageUrl} width='300px' height='auto'/>
    <div classNameName='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>  */
    );
}

export default Home;