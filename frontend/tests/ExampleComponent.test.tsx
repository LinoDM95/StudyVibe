import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ExampleComponent from '../src/components/ExampleComponent';

describe('ExampleComponent', () => {
  it('zeigt die korrekte Überschrift an', () => {
    render(<ExampleComponent />);
    const heading = screen.getByRole('heading', { name: /Willkommen zu Vite \+ React!/i });
    expect(heading).toBeInTheDocument();
  });

  it('enthält eine Schaltfläche mit dem Text "Click me"', () => {
    render(<ExampleComponent />);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });
});
