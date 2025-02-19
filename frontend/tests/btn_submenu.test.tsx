import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BtnSubMenu from '../src/components/buttons/btn_submenu';

describe('BtnSubMenu', () => {
  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();

    render(<BtnSubMenu label="Test Button" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /test button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active class when isActiveEffect is true', () => {
    render(<BtnSubMenu label="Active Button" onClick={() => {}} isActiveEffect={true} />);

    const button = screen.getByRole('button', { name: /active button/i });
    expect(button).toHaveClass('bg-studyvibe-color8');
  });

  it('should not apply active class when isActiveEffect is false', () => {
    render(<BtnSubMenu label="Inactive Button" onClick={() => {}} isActiveEffect={false} />);

    const button = screen.getByRole('button', { name: /inactive button/i });
    expect(button).not.toHaveClass('bg-studyvibe-color8');
  });
});
