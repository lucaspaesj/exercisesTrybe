import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { NoMatch } from './App';

describe('Testa o funcionamento da aplicação', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente "Sobre"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: 'Sobre',
    });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Deve testar um caminho não existente e a renderização do Not Found', () => {
    renderWithRouter(<NoMatch />);

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
