// import React from 'react';
// import Album from './components/Album';
// import Image from './components/Image';

// class App extends React.Component {
//   render() {
//     // Declaração do objeto contendo informações do album01
//     const album01 = {
//       image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gazetadopovo.com.br%2Fcaderno-g%2Flider-do-coldplay-se-arrepende-de-batizar-disco-de-mylo-xyloto-74h9f61ez7i20dyz13s92bu4u%2F&psig=AOvVaw1TNW-tGXGxK4RJSD60_t9-&ust=1651949607980000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjno__Fy_cCFQAAAAAdAAAAABAJ',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     // Declaração do objeto contendo informações do album02
//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     // Retorno do que será renderizado
//     return (
//       <div>
//              <Album album={ album01 } />
//              <Album album={ album02 } />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;