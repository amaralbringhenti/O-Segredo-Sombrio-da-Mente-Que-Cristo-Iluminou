import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../ThemeContext';
import { expect, describe, it, beforeEach, vi } from 'vitest';

const TestComponent = () => {
  const { theme, toggleTheme, switchable } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <span data-testid="switchable-value">{switchable.toString()}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders default theme when not switchable', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(screen.getByTestId('switchable-value')).toHaveTextContent('false');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('renders provided default theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('toggles theme when switchable is true', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider switchable>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');

    await user.click(screen.getByText('Toggle Theme'));

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('uses stored theme from localStorage if available and switchable', () => {
    localStorage.setItem('theme', 'dark');
    render(
      <ThemeProvider switchable>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('throws error when useTheme is used outside of ThemeProvider', () => {
    // Suppress console.error for expected error
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow('useTheme must be used within ThemeProvider');

    consoleError.mockRestore();
  });
});
