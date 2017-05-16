import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import * as carActions from '../actions/carActions';
import {bindActionCreators} from 'redux';

class CarsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: null,
      model: null,
      age: null,
      fuel: null,
      bodyType: null,
      KW: null,
      milage: null,
      autoTransmission: false,
      price: 0
    };
  }

  getCarRate = () => {
    let car = {
      Age: this.state.age.value,
      Brand: this.state.brand.value,
      Model: this.state.model.value,
      Fuel: this.state.fuel.value,
      /*BodyType: this.state.bodyType.value,*/
      KW: this.state.KW.value,
      /*Milage: this.state.milage.value,*/
      AutomaticTransmission: this.state.autoTransmission ? 1 : 0,
    };

    this.props.carActions.carRate(car);
  };

  allValuesExist = () => {
    let result = !!this.state.brand &&
      !!this.state.model &&
      !!this.state.age &&
      !!this.state.fuel &&
      /*!!this.state.bodyType &&*/
      !!this.state.KW;
      /*!!this.state.milage;*/
    return result;
  };



  render() {
    return (
      <div>
        <h1>Car data</h1>
        <form onSubmit={event => event.preventDefault()}>
          <div className="carForm">
            <Select className="carForm-select"
                    value={this.state.brand}
                    options={carBrands}
                    onChange={value => this.setState({brand: value})}
                    clearable={true}
                    placeholder={"Brand"}
                    required={true}
            />
          </div>
          <div className="carForm">
            <Select className="carForm-select"
                    value={this.state.model}
                    options={getModels(this.state.brand)}
                    onChange={value => this.setState({model: value})}
                    clearable={true}
                    placeholder={"Model"}
                    required={true}
            />
          </div>
          <div className="carForm">
            <Select className="carForm-select"
                    value={this.state.age}
                    options={carYears()}
                    onChange={value => this.setState({age: value})}
                    clearable={true}
                    placeholder={"Age"}
                    required={true}
            />
          </div>
          <div className="carForm">
            <Select className="carForm-select"
                    value={this.state.fuel}
                    options={carFuels}
                    onChange={value => this.setState({fuel: value})}
                    clearable={true}
                    placeholder={"Fuel"}
                    required={true}
            />
          </div>
          <div className="carForm">
            <Select className="carForm-select"
                    value={this.state.KW}
                    options={carKw()}
                    onChange={value => this.setState({KW: value})}
                    clearable={true}
                    placeholder={"Power (KW)"}
                    required={true}
            />
          </div>
          <div className="carForm">
            <input type="checkbox" value={this.state.autoTransmission}
                   onChange={() => this.setState({autoTransmission: !this.state.autoTransmission})}/>Automatic transmission<br/>
          </div>
          <div className="carForm">
            <input type="submit" value="Submit" onClick={() => this.getCarRate()} disabled={!this.allValuesExist()}/>
          </div>
        </form>
        { this.props.price !== 0 && <h1>Estimated price: {this.props.price}</h1>}
      </div >
    );
  }
}


CarsContainer.propTypes = {
  carActions: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,

};

function mapStateToProps(state) {
  return {
    price: state.car,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    carActions: bindActionCreators(carActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);

let getModels = brand => {
  if(!brand)
    return [];
  return carModel.filter(v => {return v.brand === brand.value;});
};

let carYears = () => {
  return Array.apply(0, Array(15))
    .map(function (element, index) {
      return {value: index + 2, label: index + 2};
    });
};

let carKw = () => {
  return Array.apply(0, Array(257))
    .map(function (element, index) {
      return {value: index + 43, label: index + 43};
    });
};


const carFuels = [
  {value: "Dyzelinas", label: "Dyzelinas"},
  {value: "Benzinas", label: "Benzinas"}
];

const carBrands = [
  { value: "Honda", label: "Honda" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "Jeep", label: "Jeep" },
  { value: "Volvo", label: "Volvo" },
  { value: "Subaru", label: "Subaru" },
  { value: "Suzuki", label: "Suzuki" },
  { value: "Saab", label: "Saab" },
  { value: "Renault", label: "Renault" },
  { value: "Seat", label: "Seat" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Volkswagen", label: "Volkswagen" },
  { value: "BMW", label: "BMW" },
  { value: "Kia", label: "Kia" },
  { value: "Nissan", label: "Nissan" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Citroen", label: "Citroen" },
  { value: "Mini", label: "Mini" },
  { value: "Porsche", label: "Porsche" },
  { value: "Toyota", label: "Toyota" },
  { value: "Mazda", label: "Mazda" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Jaguar", label: "Jaguar" },
  { value: "Fiat", label: "Fiat" },
  { value: "Opel", label: "Opel" },
  { value: "Vauxhall", label: "Vauxhall" },
  { value: "Skoda", label: "Skoda" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Lexus", label: "Lexus" },
  { value: "Alfa Romeo", label: "Alfa Romeo" },
  { value: "Ford", label: "Ford" },
  { value: "Audi", label: "Audi" },
  { value: "Peugeot", label: "Peugeot" }
];

const carModel = [
  { brand: "Mercedes-Benz", value: "E280", label: "E280" },
  { brand: "Citroen", value: "Berlingo", label: "Berlingo" },
  { brand: "Seat", value: "Ibiza", label: "Ibiza" },
  { brand: "Volkswagen", value: "Phaeton", label: "Phaeton" },
  { brand: "Volvo", value: "V50", label: "V50" },
  { brand: "BMW", value: "330", label: "330" },
  { brand: "Mazda", value: "3", label: "3" },
  { brand: "Nissan", value: "Micra", label: "Micra" },
  { brand: "Mazda", value: "6", label: "6" },
  { brand: "Volkswagen", value: "Multivan", label: "Multivan" },
  { brand: "Land Rover", value: "Discovery", label: "Discovery" },
  { brand: "BMW", value: "X3", label: "X3" },
  { brand: "Peugeot", value: "5008", label: "5008" },
  { brand: "Ford", value: "Transit", label: "Transit" },
  { brand: "Audi", value: "A5 SPORTBACK", label: "A5 SPORTBACK" },
  { brand: "Nissan", value: "Note", label: "Note" },
  { brand: "Volkswagen", value: "Golf Plus", label: "Golf Plus" },
  { brand: "Mitsubishi", value: "Colt", label: "Colt" },
  { brand: "Mercedes-Benz", value: "Vito", label: "Vito" },
  { brand: "Volvo", value: "V70", label: "V70" },
  { brand: "Mitsubishi", value: "Outlander", label: "Outlander" },
  { brand: "Mercedes-Benz", value: "B180", label: "B180" },
  { brand: "BMW", value: "535", label: "535" },
  { brand: "Citroen", value: "Xsara Picasso", label: "Xsara Picasso" },
  { brand: "Lexus", value: "RX 400h", label: "RX 400h" },
  { brand: "Mercedes-Benz", value: "ML320", label: "ML320" },
  { brand: "Toyota", value: "Yaris", label: "Yaris" },
  { brand: "Peugeot", value: "206", label: "206" },
  { brand: "Mini", value: "Cooper", label: "Cooper" },
  { brand: "Skoda", value: "Superb", label: "Superb" },
  { brand: "Nissan", value: "Qashqai+2", label: "Qashqai+2" },
  { brand: "Audi", value: "A3", label: "A3" },
  { brand: "Skoda", value: "Octavia", label: "Octavia" },
  { brand: "Toyota", value: "Avensis Verso", label: "Avensis Verso" },
  { brand: "BMW", value: "750", label: "750" },
  { brand: "Opel", value: "Combo", label: "Combo" },
  { brand: "Nissan", value: "Pathfinder", label: "Pathfinder" },
  { brand: "Nissan", value: "Terrano", label: "Terrano" },
  { brand: "Peugeot", value: "308", label: "308" },
  { brand: "Chrysler", value: "PT Cruiser", label: "PT Cruiser" },
  { brand: "Mercedes-Benz", value: "E220", label: "E220" },
  { brand: "Volkswagen", value: "Touareg", label: "Touareg" },
  { brand: "Peugeot", value: "Partner", label: "Partner" },
  { brand: "Volkswagen", value: "Jetta", label: "Jetta" },
  { brand: "Jeep", value: "Cherokee", label: "Cherokee" },
  { brand: "Citroen", value: "C3", label: "C3" },
  { brand: "Opel", value: "Vectra", label: "Vectra" },
  { brand: "Chrysler", value: "Voyager", label: "Voyager" },
  { brand: "Mercedes-Benz", value: "E270", label: "E270" },
  { brand: "BMW", value: "740", label: "740" },
  { brand: "Nissan", value: "Almera Tino", label: "Almera Tino" },
  { brand: "Opel", value: "Omega", label: "Omega" },
  { brand: "Mazda", value: "2", label: "2" },
  { brand: "Nissan", value: "Patrol", label: "Patrol" },
  { brand: "Ford", value: "Galaxy", label: "Galaxy" },
  { brand: "Suzuki", value: "Grand Vitara", label: "Grand Vitara" },
  { brand: "BMW", value: "X6", label: "X6" },
  { brand: "Volkswagen", value: "Caravelle", label: "Caravelle" },
  { brand: "Citroen", value: "Grand C4 Picasso", label: "Grand C4 Picasso" },
  { brand: "Land Rover", value: "Range Rover Sport", label: "Range Rover Sport" },
  { brand: "Nissan", value: "Juke", label: "Juke" },
  { brand: "Land Rover", value: "Freelander", label: "Freelander" },
  { brand: "Peugeot", value: "508", label: "508" },
  { brand: "BMW", value: "118", label: "118" },
  { brand: "Kia", value: "Cee'd", label: "Cee'd" },
  { brand: "BMW", value: "X1", label: "X1" },
  { brand: "Toyota", value: "Prius", label: "Prius" },
  { brand: "Volkswagen", value: "Transporter", label: "Transporter" },
  { brand: "Seat", value: "Altea", label: "Altea" },
  { brand: "Audi", value: "A6", label: "A6" },
  { brand: "Subaru", value: "Legacy", label: "Legacy" },
  { brand: "Mini", value: "Countryman", label: "Countryman" },
  { brand: "Ford", value: "Focus", label: "Focus" },
  { brand: "Mercedes-Benz", value: "C180", label: "C180" },
  { brand: "BMW", value: "520", label: "520" },
  { brand: "Renault", value: "Megane", label: "Megane" },
  { brand: "Alfa Romeo", value: "159", label: "159" },
  { brand: "Subaru", value: "Outback", label: "Outback" },
  { brand: "Audi", value: "A6 ALLROAD", label: "A6 ALLROAD" },
  { brand: "Citroen", value: "C4", label: "C4" },
  { brand: "Nissan", value: "Navara", label: "Navara" },
  { brand: "Peugeot", value: "607", label: "607" },
  { brand: "Chevrolet", value: "Captiva", label: "Captiva" },
  { brand: "Opel", value: "Astra", label: "Astra" },
  { brand: "Audi", value: "TT", label: "TT" },
  { brand: "Renault", value: "Kangoo", label: "Kangoo" },
  { brand: "BMW", value: "730", label: "730" },
  { brand: "Mercedes-Benz", value: "S320", label: "S320" },
  { brand: "Hyundai", value: "ix35", label: "ix35" },
  { brand: "Hyundai", value: "Tucson", label: "Tucson" },
  { brand: "Audi", value: "Q7", label: "Q7" },
  { brand: "Kia", value: "Sportage", label: "Sportage" },
  { brand: "Land Rover", value: "Range Rover", label: "Range Rover" },
  { brand: "Toyota", value: "Land Cruiser", label: "Land Cruiser" },
  { brand: "Volvo", value: "S80", label: "S80" },
  { brand: "Volvo", value: "S40", label: "S40" },
  { brand: "Volkswagen", value: "Touran", label: "Touran" },
  { brand: "Toyota", value: "Verso", label: "Verso" },
  { brand: "Skoda", value: "Yeti", label: "Yeti" },
  { brand: "Mercedes-Benz", value: "C220", label: "C220" },
  { brand: "Renault", value: "Grand Scenic", label: "Grand Scenic" },
  { brand: "BMW", value: "316", label: "316" },
  { brand: "Volvo", value: "S60", label: "S60" },
  { brand: "Peugeot", value: "407", label: "407" },
  { brand: "Saab", value: "9-5", label: "9-5" },
  { brand: "Opel", value: "Signum", label: "Signum" },
  { brand: "Chrysler", value: "300C", label: "300C" },
  { brand: "Seat", value: "Alhambra", label: "Alhambra" },
  { brand: "Lexus", value: "IS 220", label: "IS 220" },
  { brand: "Subaru", value: "Forester", label: "Forester" },
  { brand: "BMW", value: "X5", label: "X5" },
  { brand: "BMW", value: "525", label: "525" },
  { brand: "Audi", value: "A4", label: "A4" },
  { brand: "Porsche", value: "Cayenne", label: "Cayenne" },
  { brand: "Seat", value: "Toledo", label: "Toledo" },
  { brand: "Toyota", value: "Auris", label: "Auris" },
  { brand: "Nissan", value: "X-Trail", label: "X-Trail" },
  { brand: "Nissan", value: "Qashqai", label: "Qashqai" },
  { brand: "Renault", value: "Scenic", label: "Scenic" },
  { brand: "Audi", value: "Q5", label: "Q5" },
  { brand: "Mazda", value: "5", label: "5" },
  { brand: "Peugeot", value: "207", label: "207" },
  { brand: "Seat", value: "Altea XL", label: "Altea XL" },
  { brand: "Audi", value: "A8", label: "A8" },
  { brand: "Kia", value: "Sorento", label: "Sorento" },
  { brand: "Subaru", value: "Impreza", label: "Impreza" },
  { brand: "Fiat", value: "500", label: "500" },
  { brand: "Audi", value: "A5", label: "A5" },
  { brand: "Volkswagen", value: "Golf", label: "Golf" },
  { brand: "Skoda", value: "Fabia", label: "Fabia" },
  { brand: "Volvo", value: "C30", label: "C30" },
  { brand: "Mini", value: "Cooper S", label: "Cooper S" },
  { brand: "Volkswagen", value: "Passat", label: "Passat" },
  { brand: "Chrysler", value: "Town & Country", label: "Town & Country" },
  { brand: "Citroen", value: "C5", label: "C5" },
  { brand: "Toyota", value: "Corolla", label: "Corolla" },
  { brand: "Ford", value: "Mondeo", label: "Mondeo" },
  { brand: "Mercedes-Benz", value: "C200", label: "C200" },
  { brand: "Lexus", value: "IS 250", label: "IS 250" },
  { brand: "Volkswagen", value: "Caddy", label: "Caddy" },
  { brand: "Nissan", value: "Murano", label: "Murano" },
  { brand: "BMW", value: "528", label: "528" },
  { brand: "Mercedes-Benz", value: "E320", label: "E320" },
  { brand: "Volvo", value: "XC70", label: "XC70" },
  { brand: "Renault", value: "Clio", label: "Clio" },
  { brand: "BMW", value: "335", label: "335" },
  { brand: "Ford", value: "Fiesta", label: "Fiesta" },
  { brand: "Lexus", value: "RX 450h", label: "RX 450h" },
  { brand: "Renault", value: "Trafic", label: "Trafic" },
  { brand: "Opel", value: "Antara", label: "Antara" },
  { brand: "Volkswagen", value: "Tiguan", label: "Tiguan" },
  { brand: "Mercedes-Benz", value: "ML270", label: "ML270" },
  { brand: "BMW", value: "320", label: "320" },
  { brand: "Toyota", value: "RAV4", label: "RAV4" },
  { brand: "Peugeot", value: "307", label: "307" },
  { brand: "Toyota", value: "Corolla Verso", label: "Corolla Verso" },
  { brand: "Honda", value: "Accord", label: "Accord" },
  { brand: "Nissan", value: "Primera", label: "Primera" },
  { brand: "Opel", value: "Zafira", label: "Zafira" },
  { brand: "Vauxhall", value: "Astra", label: "Astra" },
  { brand: "Ford", value: "S-MAX", label: "S-MAX" },
  { brand: "BMW", value: "325", label: "325" },
  { brand: "Renault", value: "Laguna", label: "Laguna" },
  { brand: "Volkswagen", value: "Beetle", label: "Beetle" },
  { brand: "Mercedes-Benz", value: "E200", label: "E200" },
  { brand: "Citroen", value: "C4 Picasso", label: "C4 Picasso" },
  { brand: "Volkswagen", value: "Passat CC", label: "Passat CC" },
  { brand: "Saab", value: "9-3", label: "9-3" },
  { brand: "Volkswagen", value: "Polo", label: "Polo" },
  { brand: "Jaguar", value: "XF", label: "XF" },
  { brand: "Volkswagen", value: "Bora", label: "Bora" },
  { brand: "BMW", value: "328", label: "328" },
  { brand: "Mercedes-Benz", value: "ML350", label: "ML350" },
  { brand: "Opel", value: "Meriva", label: "Meriva" },
  { brand: "Volvo", value: "XC90", label: "XC90" },
  { brand: "Volkswagen", value: "Sharan", label: "Sharan" },
  { brand: "Volvo", value: "V40", label: "V40" },
  { brand: "Opel", value: "Corsa", label: "Corsa" },
  { brand: "Seat", value: "Leon", label: "Leon" },
  { brand: "Honda", value: "Jazz", label: "Jazz" },
  { brand: "Chrysler", value: "Grand Voyager", label: "Grand Voyager" },
  { brand: "BMW", value: "116", label: "116" },
  { brand: "BMW", value: "318", label: "318" },
  { brand: "BMW", value: "120", label: "120" },
  { brand: "Opel", value: "Insignia", label: "Insignia" },
  { brand: "Renault", value: "Espace", label: "Espace" },
  { brand: "Mercedes-Benz", value: "S350", label: "S350" },
  { brand: "Mercedes-Benz", value: "E350", label: "E350" },
  { brand: "Fiat", value: "Doblo", label: "Doblo" },
  { brand: "Volvo", value: "XC60", label: "XC60" },
  { brand: "Toyota", value: "Camry", label: "Camry" },
  { brand: "Opel", value: "Vivaro", label: "Vivaro" },
  { brand: "Ford", value: "Kuga", label: "Kuga" },
  { brand: "Jeep", value: "Grand Cherokee", label: "Grand Cherokee" },
  { brand: "Ford", value: "C-MAX", label: "C-MAX" },
  { brand: "Volvo", value: "V60", label: "V60" },
  { brand: "Mercedes-Benz", value: "A170", label: "A170" },
  { brand: "BMW", value: "530", label: "530" },
  { brand: "Honda", value: "CR-V", label: "CR-V" },
  { brand: "Mitsubishi", value: "Pajero", label: "Pajero" },
  { brand: "Honda", value: "Civic", label: "Civic" },
  { brand: "Hyundai", value: "i40", label: "i40" },
  { brand: "Ford", value: "Mustang", label: "Mustang" },
  { brand: "Hyundai", value: "i30", label: "i30" },
  { brand: "Toyota", value: "Avensis", label: "Avensis" },
  { brand: "Mercedes-Benz", value: "Viano", label: "Viano" },
  { brand: "Hyundai", value: "Santa Fė", label: "Santa Fė" }
];
