import React from 'react';
import './Footer.css';
import github from './github-icons8.png';


const Footer = ()=> {
    return (
        <footer className="flex justify-center flex-column footer relative-ns bottom-0">
            <div className="flex justify-center flex-row">
                <p className="ma0 pr3 footer-name">Carla Carrasco</p>
                <a className="grow" href="https://github.com/CarlaCarrasco/machine-predictions"><img src={ github } alt="github" style={{ height: 32, width: 32 }}/></a>
                
            </div>
        <p className="footer-api mt0">The API for this site is provided by <a className="white" href="https://www.clarifai.com/" target="_blank" rel="noopener noreferrer">Clarifai</a></p>
        </footer>
    
    );
}

export default Footer;