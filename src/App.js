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

  handleClickInButton = () => {

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
          isSaveButtonDisabled=""
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClickInButton }
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
