import React from 'react';
import './Home.css';

const Home = ({imageUrl})=> {
    return (
        <div className="center flex flex-column mb6">
            <h1 className="f1 green mt0">About</h1>
            <div className="terminal-type green w-90 w-auto-ns" style={{letterSpacing: 0, backgroundColor: "rgb(32, 32, 32)"}}>
            <p className="line-1 type-writer">> Machine Predictions is a React web app built using the clarifai artificial intelligence API. 
            </p>
            <p className="line-1 type-writer"> 
            > The API can detect food, colors, and famous faces.</p>
            <p className="line-1 type-writer"> > To view Machine Prediction results...</p>
            <p>> 1. Select a prediction model (food, color, famous)</p>
            <p>> 2. Enter an image URL</p>
            <p>> 3. Click Detect.</p>

            </div>
            
        </div>
        /*{/* <div classNameName='center ma'>
            <div classNameName='absolute mt2'></div>
            <img id='inputImage' alt='' src={imageUrl} width='300px' height='auto'/>
    <div classNameName='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>  */
    );
}

export default Home;