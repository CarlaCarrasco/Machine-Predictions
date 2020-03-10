import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './FoodRecognition.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

class FoodRecognition extends Component{
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
          Clarifai.FOOD_MODEL, 
          this.state.input)
          .then(response => this.displayFood(this.getFood(response)))
          .catch(err => console.log(err));
      }
      getFood = (data) => {
        const foodItems = data.outputs[0].data.concepts;
        const allFood = [];
        let num = 0;
        while(num < 10 ){
          allFood.push({name: foodItems[num].name, value:foodItems[num].value});
          num++;
        }

        this.setState({colors: allFood});
        return allFood;
      }
      displayFood = (food) => {
        console.log(food[1].hex);
        this.setState({colors: food});
        food.forEach(function (food) {
          const parent = document.getElementById('hexColors');
          const child = document.createElement("li");
          child.classList.add("flex", "justify-between");
            child.innerHTML = '<span>' + food.name +'</span> <span>' + food.value.toFixed(2) +'%</span> ';
            parent.append(child);
            console.log(`${food.name}: ${food.value}`);
        });
      }

      render (){ return (
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Food Prediction</h1>
            <div className="br2 pa3 ba dark-gray b--black-10 center flex-column flex-row-ns w-90 w-50-ns" style={{backgroundColor: '#202020'}}>
                <div className="w-50-ns mr3 green"> Image Goes Here
                    <img src={this.state.imageUrl} className="default-img db br2 br--top center" 
                    alt='' width='auto' height='250'/>
                </div>
                <div className="w-50-ns pa2 ph3-ns pb3-ns">
                    <div className="flex justify-between green dt mt1 bb">
                    <div className="dtc tr">
                        <h2 className="f4 mv0">Food</h2>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f4 mv0">%</h2>
                    </div>
                    </div>
                    <ul id="hexColors" className="colorData pa0 green" style={{ listStyle: 'none'}}>
                    </ul>             
                </div>
            </div>
            <ImageLinkForm onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        </div>
    );
}}

export default FoodRecognition;