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

  validateAttributes = () => {
    const {
      nome,
      description,
      photo,
      select,
      number1,
      number2,
      number3,
    } = this.state;

    const maxPower = 90;
    const maxSum = 210;
    const attr1 = parseFloat(number1);
    const attr2 = parseFloat(number2);
    const attr3 = parseFloat(number3);
    const totalSum = attr1 + attr2 + attr3;

    if (nome.length <= 0 || description.length <= 0
      || select.length <= 0 || photo.length <= 0) {
      return true;
    }

    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      return true;
    }

    if (attr1 > maxPower || attr2 > maxPower || attr3 > maxPower) {
      return true;
    }
    return (totalSum > maxSum);
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
          isSaveButtonDisabled={ this.validateAttributes() }
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
