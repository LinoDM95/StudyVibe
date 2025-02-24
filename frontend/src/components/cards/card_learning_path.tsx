import MathBlack from "../../assets/icons/math_black.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import List from "../../assets/icons/list.svg?react";
import StarEmpty from "../../assets/icons/star_empty.svg?react";
import StarGreen from "../../assets/icons/star_green.svg?react";
import StarYellow from "../../assets/icons/star_yellow.svg?react";
import StarRed from "../../assets/icons/star_red.svg?react";

interface CardLearningPathProps {
  difficulty: 1 | 2 | 3;
  title: string;
  description: string;
  duration: number;
  countCourses: number;
  className?: string;
  onClick?: () => void;
}

const difficultyLevels = {
  1: {
    label: "Grundlagen",
    stars: [StarGreen, StarEmpty, StarEmpty],
  },
  2: {
    label: "Fortgeschritten",
    stars: [StarYellow, StarYellow, StarEmpty],
  },
  3: {
    label: "Experte",
    stars: [StarRed, StarRed, StarRed],
  },
};

const CardLearningPath: React.FC<CardLearningPathProps> = ({
  difficulty,
  title,
  description,
  duration,
  countCourses,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`border-2 rounded-lg w-full sm:max-w-sm p-4 ${className} hover:cursor-pointer hover:shadow-[3px_3px_0px_black] active:shadow-none transition-all duration-300`}
      onClick={onClick}
    >
      {/* Header mit Icons */}
      <div className="flex items-center justify-between">
        <MathBlack aria-label="Themengebiet" />
        <div className="flex items-center gap-2">
          <p className="text-sm font-inter">
            {difficultyLevels[difficulty].label}
          </p>
          <div className="flex">
            {difficultyLevels[difficulty].stars.map((StarIcon, index) => (
              <StarIcon key={index} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>

      {/* Titel & Beschreibung */}
      <div className="mt-2">
        <h2 className="text-lg font-intertight">{title}</h2>
        <p className="text-gray-700 font-inter text-sm">{description}</p>
      </div>

      {/* Kursdetails */}
      <div className="flex items-center gap-5 mt-4 text-sm ">
        <div className="flex items-center gap-2">
          <Clock aria-label="Dauer" />
          <p className="font-inter">{duration} Stunden</p>
        </div>
        <div className="flex items-center gap-2">
          <List aria-label="Anzahl der Kurse" />
          <p className="font-inter">{countCourses} Kurse</p>
        </div>
      </div>
    </div>
  );
};

export default CardLearningPath;
