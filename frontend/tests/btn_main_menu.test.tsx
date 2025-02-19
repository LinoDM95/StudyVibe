import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BtnMainMenu from '../src/components/buttons/btn_main_menu';

describe('BtnMainMenu', () => {
  it('Use onClick handler', () => {
    const handleClick = vi.fn();

    render(<BtnMainMenu label="Test Button" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /test button/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
