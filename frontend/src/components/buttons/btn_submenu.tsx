import { useState, useEffect } from "react";
import { FaGear } from "react-icons/fa6";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActiveEffect?: boolean;
}

const BtnSubMenu: React.FC<ButtonProps> = ({
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
      className={`flex w-auto px-4 py-0.5 rounded-sm hover:cursor-pointer items-center gap-[12px] ${isActive ? "bg-studyvibe-color8" : "hover:bg-studyvibe-color8"} `}
      onClick={onClick}
    >
      <FaGear className="text-current text-lg"/>
      <span className="font-intertight text-lg text-studyvibe-color5">
        {label}
      </span>
    </button>
  );
};

export default BtnSubMenu;
