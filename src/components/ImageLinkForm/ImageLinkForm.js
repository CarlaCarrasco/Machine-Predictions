import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit })=> {
    return (
        <div className='f5'>
            {/* <p className="green fw9">
            {'This Machine will detect faces in your pictures. Give it a try!'}
            </p> */}
            <div className="image-form center mt3">
                <div className='form center pa4 br3 shadow-2'>
                    <input className='f4 pa3 w-70 center input-reset ba bg-transparent hover-bg-black hover-green' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple' 
                    onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
            

        </div>
    );
}

export default ImageLinkForm;