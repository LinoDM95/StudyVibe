import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BtnMainMenu from '../src/components/buttons/btn_main_menu';

describe('BtnMainMenu', () => {
  it('Use onClick handler', () => {
    // Erstellen einer Mock-Funktion für den onClick-Handler
    const handleClick = vi.fn();

    // Rendern der BtnMainMenu-Komponente mit den erforderlichen Props
    render(<BtnMainMenu label="Test Button" onClick={handleClick} />);

    // Den Button im Dokument finden
    const button = screen.getByRole('button', { name: /test button/i });

    // Simulieren eines Klicks auf den Button
    fireEvent.click(button);

    // Überprüfen, ob die Mock-Funktion genau einmal aufgerufen wurde
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
