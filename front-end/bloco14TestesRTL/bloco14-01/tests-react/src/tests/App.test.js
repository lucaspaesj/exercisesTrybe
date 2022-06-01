// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa a tela de inserção de e-mail', () => {
  test('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  test('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btn = screen.getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveValue('Enviar');
  });

  test('Verificando se existe um botão', () => {
    render(<App />);
    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(2);
  });

  test('Verificando se o e-mail é renderizado na tela, ao digitar no input e clicar no botão enviar', () => {
    const EMAIL_USER = 'teste@teste.com';
    
    render(<App />);
    const input = screen.getByLabelText('Email');
    const btn = screen.getByTestId('id-send');
    const elementEmail = screen.getByTestId('id-email-user');

    userEvent.type(input, EMAIL_USER);
    userEvent.click(btn);
    expect(input).toHaveValue('');
    expect(elementEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});

