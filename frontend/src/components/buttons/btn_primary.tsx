import { useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActiveEffect?: boolean;
}

const BtnPrimary: React.FC<ButtonProps> = ({
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
      className={`shadow-[1px_1px_0px_black] inline-flex items-center justify-center px-4 py-1.5 rounded-full border-2 bg-studyvibe-color7 hover:cursor-pointer text-studyvibe-color5 ${
        isActive
          ? "bg-studyvibe-color7 shadow-none"
          : "hover:bg-studyvibe-color hover:shadow-[2px_2px_0px_black]"
      } active:shadow-none w-fit`}
      onClick={onClick}
    >
      <span className="font-intertight text-lg ">{label}</span>
    </button>
  );
};

export default BtnPrimary;
