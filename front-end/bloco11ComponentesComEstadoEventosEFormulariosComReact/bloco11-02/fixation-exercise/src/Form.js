import React from 'react';
import EstaGostando from './EstaGostando.js';
import Nome from './Nome';

class Form extends React.Component {
  state = {
    maioresDificuldades: '',
    nome: '',
    email: '',
    estouGostando: 'Sim',
    aceitoNovasInformacoes: false,
    formComErros: 'none',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleError = () => {
    if (this.state.formComErros) alert('Deu erro aí em');
  }

  render() {
    return (
      <main>
        <h1>Formulário sobre, e em, React</h1>
        <form>
          <EstaGostando value={this.state.estouGostando} handleChange={this.handleChange} />
          <Nome value={this.state.nome}
            handleChange={this.handleChange}
            haveError={this.state.formComErros}
            handleError={this.handleError}
          />
          <label>Qual seu email?</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Descreva as suas maiores dificuldades com esta nova tecnologia:</label>
          <textarea
            name="maioresDificuldades"
            value={this.state.maioresDificuldades}
            onChange={this.handleChange}
          />
          <fieldset className="fieldsetNovasInformações">
            <legend>Checkboxes</legend>
            <input
              className="inputCheckBox"
              name="aceitoNovasInformacoes"
              type="checkbox"
              onChange={this.handleChange}
            />
            <label className="labelInput">Aceito receber novas informações sobre os conteúdos de React em meu email.</label>
          </fieldset>
          <input className="filePhoto" type="file"></input>
        </form>
      </main>
    )
  }
}

export default Form;
