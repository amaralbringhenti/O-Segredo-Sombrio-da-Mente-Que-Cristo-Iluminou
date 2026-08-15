import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ManusDialog } from './ManusDialog';

describe('ManusDialog', () => {
  it('renders correctly with default props', () => {
    const mockOnLogin = vi.fn();
    render(<ManusDialog open={true} onLogin={mockOnLogin} />);

    // Dialog should show the default subtitle
    expect(screen.getByText('Please login with Manus to continue')).toBeInTheDocument();

    // Default title is not shown if not passed

    // Login button should be present
    expect(screen.getByRole('button', { name: /login with manus/i })).toBeInTheDocument();
  });

  it('renders the title when passed', () => {
    const mockOnLogin = vi.fn();
    render(<ManusDialog title="Custom Title" open={true} onLogin={mockOnLogin} />);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders the logo when passed', () => {
    const mockOnLogin = vi.fn();
    render(<ManusDialog logo="/test-logo.png" open={true} onLogin={mockOnLogin} />);

    const logoImg = screen.getByAltText('Dialog graphic');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', '/test-logo.png');
  });

  it('calls onLogin when the login button is clicked', () => {
    const mockOnLogin = vi.fn();
    render(<ManusDialog open={true} onLogin={mockOnLogin} />);

    const loginButton = screen.getByRole('button', { name: /login with manus/i });
    fireEvent.click(loginButton);

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
  });

  it('respects the open prop for showing/hiding the dialog', () => {
    const mockOnLogin = vi.fn();
    const { rerender } = render(<ManusDialog open={false} onLogin={mockOnLogin} />);

    // Since it's a Radix dialog, if it's closed, it won't be in the document
    expect(screen.queryByText('Please login with Manus to continue')).not.toBeInTheDocument();

    // Rerender with open={true}
    rerender(<ManusDialog open={true} onLogin={mockOnLogin} />);

    // Now it should be visible
    expect(screen.getByText('Please login with Manus to continue')).toBeInTheDocument();
  });
});
