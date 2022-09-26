import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              name="description"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="number">
            Attr01
            <input
              id="number"
              name="number"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="number2">
            Attr02
            <input
              id="number2"
              name="number2"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="number3">
            Attr03
            <input
              id="number3"
              name="number3"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="photo">
            Imagem
            <input
              id="photo"
              name="photo"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="select">
            Raridade
            <select
              id="select"
              name="select"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="super-trunfo">
            Super Trybe Trunfo
            <input
              id="super-trunfo"
              name="super-trunfo"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>

          <button
            id="submit"
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

export default Form;
