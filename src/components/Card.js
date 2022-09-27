import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <div>
          Nome:
          {' '}
          <span
            data-testid="name-card"
          >
            {cardName}
          </span>
        </div>

        <section>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </section>

        <div>
          Descrição:
          {' '}
          <span
            data-testid="description-card"
          >
            {cardDescription}
          </span>

        </div>

        <div>
          Atributo 01:
          <span
            data-testid="attr1-card"
          >
            {cardAttr1}
          </span>
        </div>

        <div>
          Atributo 02:
          <span
            data-testid="attr2-card"
          >
            {cardAttr2}
          </span>
        </div>

        <div>
          Atributo 03:
          <span
            data-testid="attr3-card"
          >
            {cardAttr3}
          </span>
        </div>

        <div>
          <span
            data-testid="rare-card"
          >
            {cardRare}
          </span>
        </div>

        <div>
          { (cardTrunfo) && <p data-testid="trunfo-card"> Super Trunfo</p> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
