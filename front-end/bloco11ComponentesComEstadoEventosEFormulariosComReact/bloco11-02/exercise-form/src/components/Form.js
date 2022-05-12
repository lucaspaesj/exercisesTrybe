import React from 'react';
import states from '../data/states.js';

class Form extends React.Component {

  state = {
    name: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: 'Acre(AC)',
    tipo: '',
    resumee: '',
    alertDone: false,
    cargo: '',
    cargoDescricao: '',
    mostrarInfos: 'none',
    esconderForm: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.type === 'radio' ? target.id : target.value;
    if (name === 'cpf') {
      if (target.value.match(/[a-zA-Z]/)) {
        return this.setState({ [name]: '' });
      }
    }
    if (name === 'endereco') {
      if (target.value.match(/[^\w]/)) {
        return this.setState({ [name]: '' });
      }
    }
    this.setState({
      [name]: value,
    });
    if (name === 'name') this.setState({ [name]: value.toUpperCase(), });
  }

  checkNumber = ({ target }) => {
    const { name, value } = target;
    if (target.value.match(/^[0-9]/)) return this.setState({ [name]: '' });
    return this.setState({ [name]: value });
  }

  onMouseOverCargo = () => {
    if (!this.state.alertDone) alert('Preencha com cuidado esta informação.');
    this.setState({ alertDone: true });
  }

  handleClickBtnEnviar = (event) => {
    event.preventDefault();
    this.setState({ mostrarInfos: '' });
    this.setState({ esconderForm: 'none' });
  }

  render() {
    return (
      <>
        <form style={{ display: this.state.esconderForm }} className="registerForm">
          <h1>Formulário de submissão de currículo:</h1>
          <fieldset className="personalData">
            <legend>Dados pessoais</legend>
            <label className="label">
              Digite seu nome:
              <input
                name="name"
                type="text"
                maxLength="40"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Digite seu email:
              <input
                name="email"
                type="email"
                maxLength="50"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Digite seu CPF:
              <input
                name="cpf"
                type="text"
                maxLength="11"
                value={this.state.cpf}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Digite seu Endereço:
              <input
                name="endereco"
                type="text"
                maxLength="200"
                value={this.state.endereco}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Digite sua Cidade:
              <input
                name="cidade"
                type="text"
                maxLength="28"
                value={this.state.cidade}
                onChange={this.handleChange}
                onBlur={this.checkNumber}
                required
              />
            </label>
            <label className="label">
              Selecione seu Estado:
              <select
                name="estado"
                value={this.state.estado}
                onChange={this.handleChange}
              >
                {states.map((state) => <option key={state}>{state}</option>)}
              </select>
            </label>
            <label className="labelInput">Tipo:</label>
            <label className="labelInput">
              Casa
              <input
                id="casa"
                name="tipo"
                type="radio"
                onChange={this.handleChange}
              />
            </label>
            <label className="labelInput">
              Apartamento
              <input
                id="apartamento"
                name="tipo"
                type="radio"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <fieldset className="lastRoleData">
            <legend>Dados de seu último emprego</legend>
            <label className="label">
              Resumo do currículo:
              <textarea
                name="resumee"
                maxLength="1000"
                value={this.state.resumee}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="label">
              Último cargo:
              <textarea
                name="cargo"
                maxLength="40"
                value={this.state.cargo}
                onChange={this.handleChange}
                onMouseOver={this.onMouseOverCargo}
                required
              />
            </label>
            <label className="label">
              Descrição do cargo:
              <textarea
                name="cargoDescricao"
                maxLength="500"
                value={this.state.cargoDescricao}
                onChange={this.handleChange}
                required
              />
            </label>
          </fieldset>
          <button onClick={this.handleClickBtnEnviar} className="enviar" type="submit">Enviar informações</button>
          <hr />
          <button className="limpar" type="reset">Limpar</button>
        </form>
        <div style={{ display: this.state.mostrarInfos }} className="infos">
          <label>Dados pessoais:</label>
          <label>Nome: {this.state.name};</label>
          <label>E-mail: {this.state.email};</label>
          <label>Cpf: {this.state.cpf}.</label>
          <label>Endereço: {this.state.endereco}, {this.state.cidade}, {this.state.estado};</label>
          <label>Tipo: {this.state.tipo}.</label>
          <label>Dados do último cargo:</label>
          <label>Resumo do currículo: {this.state.resumee};</label>
          <label>Último cargo: {this.state.cargo};</label>
          <label>Descrição do cargo: {this.state.cargoDescricao}</label>
        </div>
      </>
    )
  }
}

export default Form;
