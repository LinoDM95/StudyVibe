import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BtnTabMenu from "../src/components/buttons/btn_tab";

// Test-Suite für BtnTabMenu
describe("BtnTabMenu Component", () => {
  it("renders the button with the correct label", () => {
    render(<BtnTabMenu label="Test Button" onClick={() => {}} isActiveEffect={false} />);
    
    const button = screen.getByRole("button", { name: /test button/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = vi.fn();
    render(<BtnTabMenu label="Click Me" onClick={handleClick} isActiveEffect={false} />);
    
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies active class when isActiveEffect is true", () => {
    render(<BtnTabMenu label="Active" onClick={() => {}} isActiveEffect={true} />);
    
    const button = screen.getByRole("button", { name: /active/i });
    expect(button).toHaveClass("bg-studyvibe-color");
  });

  it("applies hover class when isActiveEffect is false", () => {
    render(<BtnTabMenu label="Inactive" onClick={() => {}} isActiveEffect={false} />);
    
    const button = screen.getByRole("button", { name: /inactive/i });
    expect(button).toHaveClass("hover:bg-studyvibe-color8");
  });
});