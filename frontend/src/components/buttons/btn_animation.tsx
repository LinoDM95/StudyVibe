import { useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActiveEffect?: boolean;
}

const BtnAnimation: React.FC<ButtonProps> = ({
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
      className={`flex items-center w-auto px-4 py-0.5 rounded-full bg-studyvibe-color hover:cursor-pointer text-studyvibe-color5 ${isActive ? "bg-studyvibe-color5 text-white" : "border-1 hover:bg-studyvibe-color8 "} `}
      onClick={onClick}
    >
      <span className="font-intertight text-xs ">{label}</span>
    </button>
  );
};

export default BtnAnimation;
