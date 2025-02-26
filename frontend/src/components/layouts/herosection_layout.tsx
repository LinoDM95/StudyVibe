interface HeroSectionLayoutProps {
  title1: string;
  title2?: string;
  description: string;
  svg: React.ReactNode;
}

const HeroSectionLayout: React.FC<HeroSectionLayoutProps> = ({
  title1,
  title2,
  description,
  svg,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col font-intertight text-4xl">
          <span className="">{title1}</span>
          <span className="text-studyvibe-color9">{title2}</span>
        </div>
        <div>
          <p className="break-words md:break-normal font-inter text-md">{description}</p>
        </div>
      </div>
      <div>{svg}</div>
    </div>
  );
};

export default HeroSectionLayout;
