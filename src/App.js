import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const initialState = {
  nome: '',
  description: '',
  number1: '',
  number2: '',
  number3: '',
  photo: '',
  select: 'normal',
  trunfo: '',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const {
      nome,
      description,
      number1,
      number2,
      number3,
      photo,
      select,
    } = this.state;
    const uniqueAttr = 90;
    const maxPower = 210;
    const validateName = nome.length > 0;
    const validateDescription = description.length > 0;
    const validateImage = photo.length > 0;
    const validateSelect = select.length > 0;
    const maxSum = parseFloat(number1) + parseFloat(number2)
      + parseFloat(number3) <= maxPower;
    const validate1 = parseFloat(number1) >= 0 && parseFloat(number1) <= uniqueAttr;
    const validate2 = parseFloat(number2) >= 0 && parseFloat(number2) <= uniqueAttr;
    const validate3 = parseFloat(number3) >= 0 && parseFloat(number3) <= uniqueAttr;
    return (
      validateName
      && validateDescription
      && validateImage
      && validateSelect
      && validate1
      && validate2
      && validate3
      && maxSum
    );
  };

  render() {
    const {
      nome,
      description,
      number1,
      number2,
      number3,
      photo,
      select,
      trunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardImage={ photo }
          cardRare={ select }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick=""
        />
        <Card
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardImage={ photo }
          cardRare={ select }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
