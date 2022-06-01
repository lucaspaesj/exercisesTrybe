import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';
import App from '../App';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.color).toBe('green');
});

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
    expect(isValid.style.color).toBe('red');
});

test('Verifica se ao renderizar o App, a mensagem de e-mail válido/inválido não está na tela', () => {
    const EMAIL_USER = '';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByTestId('is-valid');
    expect(isValid).toBeEmptyDOMElement();
});