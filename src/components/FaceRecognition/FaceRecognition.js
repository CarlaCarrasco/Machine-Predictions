import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box })=> {
    return (
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Face Prediction</h1>
            <div className="br2 pa3 ba dark-gray b--black-10 center" style={{backgroundColor: '#202020'}}>
            <div className="min-width mr3 green"> Image Goes Here
                    <img src={imageUrl} className="default-img db br2 br--top" 
                    alt='' width='auto' height='250'/>
                </div>
            </div>
</div>
        /*{/* <div classNameName='center ma'>
            <div classNameName='absolute mt2'></div>
            <img id='inputImage' alt='' src={imageUrl} width='300px' height='auto'/>
    <div classNameName='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>  */
    );
}

export default FaceRecognition;