import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testa página de piadas advidas de uma API', () => {
  it('Verifica que, quando recebo uma piada, ela é renderizada na tela', async () => {
    // global.fetch = (url) => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve({
    //       id: '7h3oGtrOfxc',
    //       joke: 'Whiteboards ... are remarkable.',
    //       status: 200,
    //     })
    //   })
    // }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status: 200,
      })
    });
    render(<App />);
    const requiredJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(requiredJoke).toBeInTheDocument();
  });
});