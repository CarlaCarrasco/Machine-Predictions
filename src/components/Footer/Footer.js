import React from 'react';
import './Footer.css';
import github from './github-icons8.png';


const Footer = ()=> {
    return (
        <div className="flex justify-center flex-column footer">
            <div className="flex justify-center flex-row ma3">
                <p className="ma0 pr3 footer-name">Carla Carrasco</p>
                <a className="grow" href="https://github.com/CarlaCarrasco"><img src={ github } alt="github" style={{ height: 32, width: 32 }}/></a>
                
            </div>
        <p className="footer-api mt0">The API for this site is provided by <a className="white" href="https://www.clarifai.com/" target="_blank" rel="noopener noreferrer">Clarifai</a></p>
        </div>
    
    );
}

export default Footer;