import React from 'react';

class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      n1: 30,
      n2: 30,
      n3: 30,
      max: 100,
      min: 0,
      mode: "none",
      rainbowSpeed: 0,
      connection: {}
    };

    this.updateState = this.updateState.bind(this);
    this.updateSliders = this.updateSliders.bind(this);
  }
  componentWillMount() {
    let connection = new WebSocket('ws://192.168.31.210:81/', ['arduino']);
    this.setState({connection});
    connection.onmessage = this.updateState;
  }

  updateState = function (value) {
    let values = value.data.split(' ');
    this.setState({mode: values[1], n1:parseInt(values[2]), n2:parseInt(values[3]), n3:parseInt(values[4])}, this.updateSliders);
  };

  updateSliders = function () {
    let slider;
    slider = document.getElementsByName("rainbowSpeed")[0];
    if(slider)
      slider.value = this.state.n3;
    slider = document.getElementsByName("brightness")[0];
    if(slider)
      slider.value = this.state.n1;
    slider = document.getElementsByName("red")[0];
    if(slider)
      slider.value = this.state.n1;
    slider = document.getElementsByName("green")[0];
    if(slider)
      slider.value = this.state.n2;
    slider = document.getElementsByName("blue")[0];
    if(slider)
      slider.value = this.state.n3;
  };

  onRadioChange = value => {
    this.setState({mode: value.target.value}, () => {this.sendSocket(true);});
  };

  buildQuery = (broadcast) => {
    return "1 " + this.state.mode + " " + this.state.n1 + " " + this.state.n2 + " " + this.state.n3 + " " + (broadcast ? "1" : "0");
  };

  sendSocket = (broadcast) => {
    this.state.connection.send(this.buildQuery(broadcast));
  };
  broadcastSliderValue = () => {
    this.sendSocket(true);
  };

  onSliderChange = value => {
    switch(value.target.name)
    {
      case "red":
        this.setState({n1: value.target.value}, () => {this.sendSocket(false);});
        break;
      case "green":
        this.setState({n2: value.target.value}, () => {this.sendSocket(false);});
        break;
      case "blue":
        this.setState({n3: value.target.value}, () => {this.sendSocket(false);});
        break;
      case "rainbowSpeed":
        this.setState({n3: value.target.value}, () => {this.sendSocket(false);});
        break;
      case "brightness":
        this.setState({n1: value.target.value}, () => {this.sendSocket(false);});
        break;
    }
  };

  render() {
    if(this.state.mode === "none")
      return <div/>;

    return (
      <div className="controls">
        <div className="colors" onChange={this.onRadioChange}>
          <label htmlFor="w">White</label><input type="radio" name="color" value="w" id="w" checked={this.state.mode == "w"} onChange={this.onRadioChange}/> <br/>
          <label htmlFor="r">Red</label><input type="radio" name="color" value="r" id="r" checked={this.state.mode == "r"} onChange={this.onRadioChange}/> <br/>
          <label htmlFor="g">Green</label><input type="radio" name="color" value="g" id="g" checked={this.state.mode == "g"} onChange={this.onRadioChange}/>  <br/>
          <label htmlFor="b">Blue</label><input type="radio" name="color" value="b" id="b" checked={this.state.mode == "b"} onChange={this.onRadioChange}/>  <br/>
          <label htmlFor="rainbow">Rainbow</label><input type="radio" name="color" value="~" id="rainbow" checked={this.state.mode == "~"} onChange={this.onRadioChange}/>  <br/>
          <label htmlFor="rgb">RGB</label><input type="radio" name="color" value="a" id="rgb" checked={this.state.mode == "a"} onChange={this.onRadioChange}/>  <br/>
          <label htmlFor="music">Music</label><input type="radio" name="color" value="m" id="music" checked={this.state.mode == "m"} onChange={this.onRadioChange}/>  <br/>
        </div>

        <div className="slider">
          {this.state.mode === "~" &&
          <div className="br-slider">
            <div>
              <label>{this.state.n3}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="rainbowSpeed"
                     onChange={this.onSliderChange}
                     onMouseUp={this.broadcastSliderValue}
                     onTouchEnd ={this.broadcastSliderValue}
                     step ={5}
              />
            </div>
          </div>}
          {this.state.mode !== "a" &&
          <div className="br-slider">
            <label>{this.state.n1}</label>
            <input type="range"
                   min={this.state.min}
                   max={this.state.max}
                   value={this.state.currentValue}
                   name="brightness"
                   onChange={this.onSliderChange}
                   onMouseUp={this.broadcastSliderValue}
                   onTouchEnd ={this.broadcastSliderValue}
                   step ={5}
            />
          </div>}
          {this.state.mode === "a" &&
          <div className="rgb-sliders">
            <div>
              <label>{this.state.n1}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="red"
                     onChange={this.onSliderChange}
                     onMouseUp={this.broadcastSliderValue}
                     onTouchEnd ={this.broadcastSliderValue}
                     step ={5}
              />
            </div>
            <div>
              <label>{this.state.n2}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="green"
                     onChange={this.onSliderChange}
                     onMouseUp={this.broadcastSliderValue}
                     onTouchEnd ={this.broadcastSliderValue}
                     step ={5}
              />
            </div>
            <div>
              <label>{this.state.n3}</label>
              <input type="range"
                     min={this.state.min}
                     max={this.state.max}
                     value={this.state.currentValue}
                     name="blue"
                     onChange={this.onSliderChange}
                     onMouseUp={this.broadcastSliderValue}
                     onTouchEnd ={this.broadcastSliderValue}
                     step ={5}
              />
            </div>
            <br/>
            <div className="colorTest" style={{backgroundColor: 'rgb(' + Math.ceil(this.state.n1 * 2.55) + ',' + Math.ceil(this.state.n2 * 2.55) + ',' + Math.ceil(this.state.n3 * 2.55) + ')'}}/>
          </div>}
        </div>
        </div>
    );
  }
}

export default Slider;
