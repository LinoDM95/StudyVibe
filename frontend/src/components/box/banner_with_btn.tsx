import Icons from "../../assets/icons/icon_collection.svg?react";
import BtnPrimary from "../buttons/btn_primary";

interface BannerWithBtnProps {
  text: string;
  buttonLabel: string;
  onClick: () => void;
}

const BannerWithBtn: React.FC<BannerWithBtnProps> = ({
  text,
  buttonLabel,
  onClick,
}) => {
  return (
<div className="flex flex-col md:flex-row border-2 rounded-lg bg-studyvibe-color14 gap-6 md:gap-10 items-center">
  {/* Text & Button */}
  <div className="flex flex-col w-full md:w-2/3 text-center md:text-left p-10 gap-5">
    <p className="font-intertight text-xl md:text-2xl">{text}</p>
    <BtnPrimary label={buttonLabel} onClick={onClick} />
  </div>

  {/* SVG Icon */}
  <Icons className="" />
</div>

  );
};

export default BannerWithBtn;
