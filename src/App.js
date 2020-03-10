import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import FoodRecognition from './components/FoodRecognition/FoodRecognition';
import ColorRecognition from './components/ColorRecognition/ColorRecognition';
import FamousRecognition from './components/FamousRecognition/FamousRecognition';
import Footer from './components/Footer/Footer';
import './App.css';
require('dotenv').config();
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
});
const particleOptions = {
    particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#19a974"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#19a974",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          retina_detect: true
    }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      colors: {},
      box: {},
      recModel: '',
    } 
  }

  calcFaceLocation = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      rightCol: width - (faceData.right_col * width),
      bottomRow: height - (faceData.bottom_row * height)
    }
  }

  displayFaceBorder = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

onButtonSubmit = ()=>{
    this.setState({imageUrl: this.state.input});
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particleOptions}/>

                  <Router>
              <Navigation />      
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ColorRecognition" exact render={(routeProps) => (<ColorRecognition {...routeProps}
                  imageUrl={this.state.imageUrl} apiKey={app}/>)} />
                {/* <Route path="/FaceRecognition" exact render={(routeProps) => (<FaceRecognition {...routeProps}
                  imageUrl={this.state.imageUrl} apiKey={app}/>)} /> */}
                <Route path="/FoodRecognition" exact render={(routeProps) => (<FoodRecognition {...routeProps}
                  imageUrl={this.state.imageUrl} apiKey={app}/>)} />
                <Route path="/FamousRecognition" exact render={(routeProps) => (<FamousRecognition {...routeProps}
                  imageUrl={this.state.imageUrl} onInputChange={this.onInputChange} apiKey={app}/>)} />
                {/* <Route path="/FamousRecognition" exact component={FamousRecognition} apiKey={app}/> */}
              </Switch>
          </Router>
        <Footer />
  
      </div>
    );
  }

}

export default App;
