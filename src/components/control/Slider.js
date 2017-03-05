import React from 'react';

class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      brightness: 10,
      max: 100,
      min: 0,
      mode: "white",
      r: 0,
      g: 0,
      b: 0,
      rainbowSpeed: 0
    };
  }

  onRadioChange = value => {
    this.setState({mode: value.target.value});
  };
  onSliderChange = value => {
    switch(value.target.name)
    {
      case "red":
        this.setState({r: value.target.value});
        break;
      case "green":
        this.setState({g: value.target.value});
        break;
      case "blue":
        this.setState({b: value.target.value});
        break;
      case "rainbowSpeed":
        this.setState({rainbowSpeed: value.target.value});
        break;
      case "brightness":
        this.setState({brightness: value.target.value});
        break;

    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="controls">
        <div className="colors" onChange={this.onRadioChange}>
          <label htmlFor="w">White</label><input type="radio" name="color" value="white" id="w"/> <br/>
          <label htmlFor="r">Red</label><input type="radio" name="color" value="red" id="r"/> <br/>
          <label htmlFor="g">Green</label><input type="radio" name="color" value="green" id="g"/>  <br/>
          <label htmlFor="b">Blue</label><input type="radio" name="color" value="blue" id="b"/>  <br/>
          <label htmlFor="rainbow">Rainbow</label><input type="radio" name="color" value="rainbow" id="rainbow"/>  <br/>
          <label htmlFor="rgb">RGB</label><input type="radio" name="color" value="rgb" id="rgb"/>  <br/>
        </div>

        <div className="slider">
          {this.state.mode === "rainbow" &&
          <div className="br-slider">
            <div>
              <label>{this.state.rainbowSpeed}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="rainbowSpeed"
                     onChange={this.onSliderChange}
              />
            </div>
          </div>}
          {this.state.mode !== "rgb" &&
          <div className="br-slider">
            <label>{this.state.brightness}</label>
            <input type="range"
                   min={this.state.min}
                   max={this.state.max}
                   value={this.state.currentValue}
                   name="brightness"
                   onChange={this.onSliderChange}
            />
          </div>}
          {this.state.mode === "rgb" &&
          <div className="rgb-sliders">
            <div>
              <label>{this.state.r}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="red"
                     onChange={this.onSliderChange }
              />
            </div>
            <div>
              <label>{this.state.g}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="green"
                     onChange={this.onSliderChange}
              />
            </div>
            <div>
              <label>{this.state.b}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="blue"
                     onChange={this.onSliderChange}
              />
            </div>
          </div>}
        </div>
        </div>
    );
  }
}

export default Slider;
