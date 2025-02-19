import { useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActiveEffect?: boolean;
}

const BtnSecondary: React.FC<ButtonProps> = ({
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
      className={` shadow-[1px_1px_0px_black] flex items-center w-auto px-4 py-1.5 rounded-full border-2 hover:cursor-pointer text-studyvibe-color5 ${isActive ? "shadow-none" : " hover:bg-studyvibe-color8 hover:shadow-[2px_2px_0px_black]"} `}
      onClick={onClick}
    >
      <span className="font-intertight text-lg ">{label}</span>
    </button>
  );
};

export default BtnSecondary;
