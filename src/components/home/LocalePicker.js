import React from 'react';
import Select from 'react-select';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';

class LocalePicker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      locale: 'en'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    counterpart.setLocale(val.value);
    this.setState({locale: val.value});
  }

  render() {
    const options = [
      { value: "en", label: <Translate content={'LocalePicker.ENGLISH'} /> },
      { value: "lt", label: <Translate content={'LocalePicker.LITHUANIAN'} /> }
    ];

    return (
      <div className={'localeSelector'}>
        <Select
          value={this.state.locale}
          options={options}
          onChange={this.handleChange}
          clearable={false}
        />
      </div>
    );
  }
}

export default LocalePicker;
