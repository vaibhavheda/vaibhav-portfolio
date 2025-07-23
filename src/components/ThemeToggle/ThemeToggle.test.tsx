import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeContext';

// helper to render component within provider
const renderWithProvider = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

describe('ThemeToggle', () => {
  let prefersDark = false;

  beforeEach(() => {
    localStorage.clear();
    // mock matchMedia based on prefersDark value
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: prefersDark,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  test('cycles through light, dark and system themes', async () => {
    // start from explicit light theme
    localStorage.setItem('theme', 'light');
    const user = userEvent.setup();
    renderWithProvider();

    const button = screen.getByRole('button');

    // initial theme from localStorage
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');

    // click to dark
    await user.click(button);
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    // change system preference to dark and click to system
    prefersDark = true;
    await user.click(button);
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    // click back to light
    await user.click(button);
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });
});
