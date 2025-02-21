/**
 * ## CardHoverEffect Component
 *
 * The `CardHoverEffect` component displays a styled card with an SVG icon, a title, description, and a topic.
 * Additionally, it categorizes the card based on the difficulty `level` prop.
 *
 * !  Level Mapping:
 * ! **level = 1** → Uses the `easy` dictionary (color: blue)
 * ! **level = 2** → Uses the `medium` dictionary (color: yellow)
 * ! **level = 3** → Uses the `hard` dictionary (color: red)
 *
 * @param Props:
 * @param svg (optional): An SVG icon to display on the card.
 * @param title (string): The title of the card.
 * @param description (string): A short description of the topic.
 * @param topic (string): The category or subject of the card.
 * @param level (number): Determines the difficulty level (1 = Easy, 2 = Medium, 3 = Hard).
 *
 * ?  Example Usage:
 * ? <CardHoverEffect
 * ?   svg={<MyIcon />}
 * ?   title="Math Basics"
 * ?   description="Learn the fundamentals of algebra."
 * ?   topic="Mathematics"
 * ?   level={2}
 * ? />
 */

interface CardHoverEffectProps {
  svg?: any;
  title: string;
  description: string;
  topic: string;
  level: number;
}

const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  svg,
  title,
  description,
  topic,
  level,
}) => {
  const levels = [
    { label: "#Leicht", color: "bg-studyvibe-color3" },
    { label: "#Mittel", color: "bg-studyvibe-color11" },
    { label: "#Schwer", color: "bg-studyvibe-color9" },
  ];

  const selectedLevel = levels[level - 1];
//w-[250px] md:w-[300px] h-[400px] md:h-[500px]
  return (
    <div className="w-full h-full flex flex-col p-6 border-2 shadow-[3px_3px_0px_black] rounded-2xl gap-10 hover:shadow-[10px_10px_0px_black] transition-all duration-300 hover:cursor-pointer active:shadow-none">
      <div className="flex flex-col items-center flex-grow gap-3">
        {svg}
        <h1 className="font-intertight text-center text-2xl">{title}</h1>
        <p className="font-inter text-center">{description}</p>
      </div>
      <div className="flex mt-auto gap-3">
      <span className={`pl-1.5 pr-1.5 bg-studyvibe-color10 rounded-sm font-manrope `}>
          #{topic}
        </span>
        <span className={`pl-1.5 pr-1.5 rounded-sm font-manrope ${selectedLevel.color}`}>
          {selectedLevel.label}
        </span>
      </div>
    </div>
  );
};

export default CardHoverEffect;
