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
  trunfo: false,
  alreadySaved: [],
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

  validateSaveButton = (event) => {
    event.preventDefault();

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

    const newCard = {
      nome,
      description,
      number1,
      number2,
      number3,
      photo,
      select,
      trunfo,
    };

    this.setState((lastState) => ({
      nome: '',
      description: '',
      number1: '0',
      number2: '0',
      number3: '0',
      photo: '',
      select: 'normal',
      trunfo: false,
      alreadySaved: [...lastState.alreadySaved, newCard],
    }));
  };

  verifyTrunfo = () => {
    const { alreadySaved } = this.state;
    return alreadySaved.some((card) => card.trunfo);
  }; // função desenvolvida com auxilio da Mentoria do João Andrade resolvendo dúvida do colega William Afonso que possuia duvida similar a minha com a renderização condicional

  excludeCard = ({ target }) => {
    const { alreadySaved } = this.state;
    const exclude = alreadySaved.filter((card) => card.nome !== target.id);
    this.setState({
      alreadySaved: exclude,
    });
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
      alreadySaved,
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
          onSaveButtonClick={ this.validateSaveButton }
          hasTrunfo={ this.verifyTrunfo() }
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
        <div>
          <ul>
            {alreadySaved.map((card) => (
              <li
                key={ card.nome }
              >
                <Card
                  cardName={ card.nome }
                  cardDescription={ card.description }
                  cardImage={ card.photo }
                  cardAttr1={ card.number1 }
                  cardAttr2={ card.number2 }
                  cardAttr3={ card.number3 }
                  cardRare={ card.select }
                  cardTrunfo={ card.trunfo }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  id={ card.nome }
                  name="exclude-button"
                  onClick={ this.excludeCard }
                >
                  Excluir

                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
