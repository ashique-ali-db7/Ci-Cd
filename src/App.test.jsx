// src/App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('<App />', () => {
  it('renders both Vite and React logos with correct alt text', () => {
    render(<App />);

    // The Vite logo
    const viteLogo = screen.getByAltText('Vite logo');
    expect(viteLogo).toBeInTheDocument();

    // The React logo
    const reactLogo = screen.getByAltText('React logo');
    expect(reactLogo).toBeInTheDocument();
  });

  it('renders the heading "Vite + React"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /vite \+ react/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays the initial count as 0 and increments when button is clicked', async () => {
    render(<App />);

    // Find the button by its text
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // Click once → count should become 1
    await fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();

    // Click again → count should become 2
    await fireEvent.click(screen.getByRole('button', { name: /count is 1/i }));
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument();
  });



  it('renders the bottom paragraph about clicking logos', () => {
    render(<App />);
    const bottomParagraph = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(bottomParagraph).toBeInTheDocument();
  });

  it('each logo links to the correct URL', () => {
    render(<App />);

    // The Vite logo is wrapped in an <a href="https://vite.dev">
    const viteImg = screen.getByAltText('Vite logo');
    const viteAnchor = viteImg.closest('a');
    expect(viteAnchor).toHaveAttribute('href', 'https://vite.dev');

    // The React logo is wrapped in an <a href="https://react.dev">
    const reactImg = screen.getByAltText('React logo');
    const reactAnchor = reactImg.closest('a');
    expect(reactAnchor).toHaveAttribute('href', 'https://react.dev');
  });
});
