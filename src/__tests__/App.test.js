import { render, screen } from '@testing-library/react';
import App from '../App';

test('text in App component?', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button in App component?', () => {
  render(<App />);
  const btn=screen.getByRole('button',{hidden:false})
  expect(btn).toBeInTheDocument()
});

