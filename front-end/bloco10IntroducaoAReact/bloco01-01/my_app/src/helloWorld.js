import React, { Component } from 'react';

class HelloWorld extends Component {
    // lógica interna do React - quando quisermos exibir algo na tela o React invoca a função render do Component que demos à ele
    render () {
        return <span>Hello, world!</span>
    }
}

export default HelloWorld;
