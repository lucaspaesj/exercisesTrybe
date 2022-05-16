import React from 'react';
import './App.css';
import Loading from './Loading';
import PersonCard from './PersonCard';

const URL = 'https://api.randomuser.me/';

class App extends React.Component {
  state = {
    users: [],
    loading: true,
  }

  fetchApi = async () => {
    const fetchApi = await fetch(URL);
    const response = await fetchApi.json();
    const data = await response.results;
    return data;
  }

  componentDidMount = async () => {
    const data = await this.fetchApi();
    this.setState({
      users: data,
      loading: false,
    });
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }
  
  handleClick = async () => {
    const data = await this.fetchApi();
    this.setState((prevState) => ({
      users: [...prevState.users, data[0]],
    }));
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <div className="randomUser">
          {
            loading ? <Loading /> : <div>
            {users.map((currentUser, index) => (
              <PersonCard
                key={index}
                person={this.getUserElements(currentUser)}
              />))}
          </div>
          }
        </div>
        <button type='button' onClick={ this.handleClick }>Clique para gerar um usuário aleatório</button>
      </div>
    );
  }
}

export default App;
