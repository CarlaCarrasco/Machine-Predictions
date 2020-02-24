import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './FamousRecognition.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

class FaceRecognition extends Component{
    constructor(props) {
        super();
        this.state = {
          input: '',
          imageUrl: props.imageUrl,
          colors: {},
          recModel: '',
        } 
      }
      onInputChange = (event) =>{
        this.setState({input: event.target.value});
      }

      onButtonSubmit = ()=>{  
        //COLOR MODEL
          this.setState({imageUrl: this.state.input});
          this.props.apiKey.models
          .predict(
          Clarifai.CELEBRITY_MODEL, 
          this.state.input)
          .then(response => this.displayResults(this.getCelebrity(response)))
          .catch(err => console.log(err));
      }
      getCelebrity = (data) => {
        const celebrityData = data.outputs[0].data.regions[0].data.concepts[0];
        const name = celebrityData.name;
        const percent = celebrityData.value;
        return {name:name, percent:percent};
      }
      displayResults = (data) => {
        console.log(data.name);
        document.getElementById('celebName').innerText = data.name;
        document.getElementById('celebPercent').innerText = data.percent; 
      }

      render (){ return (
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Celebrity Prediction</h1>
            <div className="br2 pa3 ba dark-gray b--black-10 center" style={{backgroundColor: '#202020'}}>
                <div className="min-width mr3 green"> Image Goes Here
                    <img src={this.state.imageUrl} className="default-img db br2 br--top" 
                    alt='' width='auto' height='250'/>
                </div>
                <div className="min-width pa2 ph3-ns pb3-ns">
                    <div className="flex justify-between green dt mt1 bb">
                    <div className="dtc tr">
                        <h2 className="f4 mv0">Celebrity</h2>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f4 mv0">Probability</h2>
                    </div>
                    </div>
                    <ul id="hexColors" className="colorData pa0 green" style={{ listStyle: 'none'}}>
                        <li className="flex justify-between">
                            <span id="celebName"></span>
                            <span id="celebPercent"></span>
                        </li>
                    </ul>             
                </div>
            </div>
            <ImageLinkForm onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        </div>
    );
}}

export default FaceRecognition;