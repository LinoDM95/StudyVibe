import { useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActiveEffect: boolean;
}


const BtnTabMenu: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActiveEffect,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActiveEffect !== undefined) {
      setIsActive(isActiveEffect);
    }
  }, [isActiveEffect]);


  return (
    <button
      className={`flex items-center w-auto px-4 py-0.5 rounded-lg hover:cursor-pointer  ${isActive ? "bg-studyvibe-color" : "hover:bg-studyvibe-color8 "} `}
      onClick={onClick}
    >
      <span className="font-intertight text-sm text-studyvibe-color5">
        {label}
      </span>
    </button>
  );
};

export default BtnTabMenu;
