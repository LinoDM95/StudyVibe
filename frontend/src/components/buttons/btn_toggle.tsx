import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

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
      className={`flex gap-2 items-center w-auto px-4 py-0.5 rounded-full border-1 hover:cursor-pointer text-studyvibe-color5 ${isActive ? "bg-studyvibe-color" : "hover:bg-studyvibe-color8 "} `}
      onClick={onClick}
    >
      <span className="font-intertight text-xs">{label}</span>
      {isActive && <RxCross1 className="text-current text-xs" />}
    </button>
  );
};

export default BtnAnimation;
