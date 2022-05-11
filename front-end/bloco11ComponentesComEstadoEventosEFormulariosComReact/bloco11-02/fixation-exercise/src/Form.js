import React from 'react';

class Form extends React.Component {
  state = {
    maioresDificuldades: '',
    nome: '',
    email: '',
    estouGostando: 'Sim',
    aceitoNovasInformacoes: false,
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <h1>Formulário sobre, e em, React</h1>
        <form>
          <label>Estou gostando de aprender React?</label>
          <select value={this.state.estouGostando} onChange={this.handleChange} name="estouGostando">
            <option>Sim</option>
            <option>Não</option>
          </select>
          <label>Qual o seu nome?</label>
          <input
            name="nome"
            type="text"
            value={this.state.nome}
            onChange={this.handleChange}
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
              onChange={ this.handleChange }
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
