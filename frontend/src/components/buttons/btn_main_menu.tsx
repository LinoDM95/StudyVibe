interface ButtonProps {
  label: string;
  onClick: () => void;
}

const BtnMainMenu: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="relative group hover:cursor-pointer" onClick={onClick}>
      <span className="font-intertight text-menu text-studyvibe-dark">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[5px] bg-studyvibe-yellow1 transition-all duration-300 group-hover:w-full "></span>
    </button>
  );
};

export default BtnMainMenu;
