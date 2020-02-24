import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './FoodRecognition.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

// const app = new Clarifai.App({
//     apiKey: '68ce186b958f47d889a99b0e8bd03292'
//   });

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
        console.log(foodItems);
        foodItems.forEach(function (foodItems){
          allFood.push({name: foodItems.name, value:foodItems.value});
        });
        this.setState({colors: allFood});
        console.log('AllFood: '+ allFood);
        console.log(allFood[0].name)
        // console.log(allColors[0].hex);
        return allFood;
      }
      displayFood = (food) => {
        console.log(food[1].hex);
        this.setState({colors: food});
        food.forEach(function (food) {
          const parent = document.getElementById('hexColors');
          const child = document.createElement("li");
          child.classList.add("flex", "justify-between");
          child.innerHTML = '<span>' + food.name +'</span> <span>' + food.value +'</span> ';
          parent.append(child);
          // parent.append( colors.name + ' ' + colors.hex, child);
        });
      }

      render (){ return (
        <div className="center flex flex-column">
            <h1 className="f1 green mt0">Food Prediction</h1>
            <div className="br2 pa3 ba dark-gray b--black-10 center" style={{backgroundColor: '#202020'}}>
                <div className="min-width mr3 green"> Image Goes Here
                    <img src={this.state.imageUrl} className="default-img db br2 br--top" 
                    alt='' width='auto' height='250'/>
                </div>
                <div className="min-width pa2 ph3-ns pb3-ns">
                    <div className="flex justify-between green dt mt1 bb">
                    <div className="dtc tr">
                        <h2 className="f4 mv0">Food</h2>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f4 mv0">Percentage</h2>
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