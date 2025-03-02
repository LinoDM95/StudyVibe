import Placeholder from "../../assets/examples/Example1.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import List from "../../assets/icons/list.svg?react";
import StarEmpty from "../../assets/icons/star_empty.svg?react";
import StarGreen from "../../assets/icons/star_green.svg?react";
import StarYellow from "../../assets/icons/star_yellow.svg?react";
import StarRed from "../../assets/icons/star_red.svg?react";

interface CardLearningPathLargeProps {
  title: string;
  text: string;
  difficulty: 1 | 2 | 3;
  duration: number;
  countCurses: number;
  img?: any;
}

const CardLearningPathLarge: React.FC<CardLearningPathLargeProps> = ({
  title,
  text,
  difficulty,
  duration,
  countCurses,
  img,
}) => {
  return (
    <div className="flex flex-col md:flex-row border-2 rounded-lg m-5 sm:m-10 p-4 sm:p-6 md:p-10 shadow-[2px_2px_0px_black] gap-10 py-50">
      {/* Linke Seite - Text */}
      <div className="flex flex-col gap-15 flex-1 ">
        {/* Titel & Beschreibung */}
        <div className="flex flex-col gap-3">
          <h1 className="font-intertight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="font-inter text-sm sm:text-base max-w-[600px] leading-relaxed line-clamp-5">
  {text}
</p>

        </div>

        {/* Details (Schwierigkeit, Dauer, Anzahl Kurse) */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
          {/* Schwierigkeit */}
          {difficulty === 1 ? (
            <div className="flex items-center gap-2 bg-studyvibe-color14 rounded-lg p-2">
              <p className="font-manrope text-sm">Anfänger</p>
              <div className="flex items-center gap-1">
                <StarGreen />
                <StarEmpty />
                <StarEmpty />
              </div>
            </div>
          ) : difficulty === 2 ? (
            <div className="flex items-center gap-2 bg-studyvibe-color14 rounded-lg p-2">
              <p className="font-manrope text-sm">Mittelstufe</p>
              <div className="flex items-center gap-1">
                <StarYellow />
                <StarYellow />
                <StarEmpty />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-studyvibe-color14 rounded-lg p-2">
              <p className="font-manrope text-sm">Fortgeschritten</p>
              <div className="flex items-center gap-1">
                <StarRed />
                <StarRed />
                <StarRed />
              </div>
            </div>
          )}

          {/* Dauer */}
          <div className="flex items-center gap-2 bg-studyvibe-color14 rounded-lg p-2">
            <Clock />
            <p className="font-manrope text-sm">{duration} Stunden</p>
          </div>

          {/* Anzahl Kurse */}
          <div className="flex items-center gap-2 bg-studyvibe-color14 rounded-lg p-2">
            <List />
            <p className="font-manrope text-sm">{countCurses} Kurse</p>
          </div>
        </div>
      </div>

      {/* Rechte Seite - Bild */}
      <div className="flex-1 flex justify-center items-center">
        {img ? (
          <img
            src={img}
            alt={title}
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full object-contain"
          />
        ) : (
          <Placeholder className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full object-contain" />
        )}
      </div>
    </div>
  );
};

export default CardLearningPathLarge;
