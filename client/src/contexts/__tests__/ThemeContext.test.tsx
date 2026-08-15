import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useTheme } from '../ThemeContext';

// A simple component that uses the useTheme hook
function TestComponent() {
  useTheme();
  return <div>Test</div>;
}

describe('ThemeContext', () => {
  it('throws an error when useTheme is used outside of ThemeProvider', () => {
    // Suppress React error boundary warnings for this test since we expect it to throw
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow('useTheme must be used within ThemeProvider');

    consoleErrorSpy.mockRestore();
  });
});
