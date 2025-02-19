import { GrLinkNext } from "react-icons/gr";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const BtnNextSmall: React.FC<ButtonProps> = ({
  label,
  onClick,
}) => {



  return (
    <button
      className="relative group w-auto hover:cursor-pointer"
      onClick={onClick}
    >
      <span className="flex items-center gap-1 font-manrope text-xs text-studyvibe-dark">
        {label}
      </span>
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-studyvibe-color7 transition-all duration-300 group-hover:w-full`}
      ></span>
    </button>
  );
};
export default BtnNextSmall;
