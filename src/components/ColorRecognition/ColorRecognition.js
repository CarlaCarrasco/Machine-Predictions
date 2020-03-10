import React, { Component } from 'react';
// import './ColorRecognition.css';
import Clarifai from 'clarifai';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

class ColorRecognition extends Component{
    constructor(props) {
        super();
        this.state = {
          input: '',
          imageUrl: props.imageUrl,
          colors: {},
          recModel: '',
        } 
      }
      // componentDidMount(){
      //   console.log('component mounted')
      // }
      onInputChange = (event) =>{
        this.setState({input: event.target.value});
      }

      onButtonSubmit = ()=>{  
        //COLOR MODEL
          this.setState({imageUrl: this.state.input});
          this.props.apiKey.models
          .predict(
          Clarifai.COLOR_MODEL, 
          this.state.input)
          .then(response => this.displayColors(this.getColors(response)))
          .catch(err => console.log(err));
      }
      getColors = (data) => {
        const colorData = data.outputs[0].data.colors;
        const allColors = [];
        colorData.forEach(function (colorData){
          allColors.push(colorData.w3c);
        });
        this.setState({colors: allColors});
        return allColors;
      }

      displayColors = (colors) => {
        this.setState({colors: colors});
        colors.forEach(function (colors) {
        const parent = document.getElementById('hexColors');
        const child = document.createElement("li");
        child.classList.add("flex", "justify-between");
        child.innerHTML = '<span>' + colors.name +'</span> <span>' + colors.hex +'</span> ';
        parent.append(child);
        });
      }
    render (){ 
        return(
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Color Prediction</h1>
            <div className="br2 pa3 ba dark-gray b--black-10 center flex-column flex-row-ns w-90 w-50-ns" style={{backgroundColor: '#202020'}}>
                <div className="w-50-ns mr3 green"> Image Goes Here
                    <img src={this.state.imageUrl} className="default-img db br2 br--top center" 
                    alt='' width='auto' height='250'/>
                </div>
                <div className="w-50-ns pa2 ph3-ns pb3-ns">
                    <div className="flex justify-between green dt mt1 bb">
                    <div className="dtc tr">
                        <h2 className="f4 mv0">NAME</h2>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f4 mv0">HEX #</h2>
                    </div>
                    </div>
                    <ul id="hexColors" className="colorData pa0 green" style={{ listStyle: 'none'}}>

                    </ul>
                    {/* <p className="f6 lh-copy measure mt2 mid-gray"> </p>*/}
                    
                </div>
            </div>
            <ImageLinkForm onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
        </div>
    );
}}

export default ColorRecognition;