import BtnPrimary from "../../buttons/btn_primary";
import Vibrations from "../../../assets/topics/Vibrations.svg?react";
import CardHoverEffect from "../../cards/card_topics";

interface LPRecommendationsProps {}

const LPRecommendations: React.FC<LPRecommendationsProps> = ({}) => {
  function handleOnClick() {}

  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center gap-20">
      <h1 className="font-intertight text-[2.25rem]">
        Unsere Top-Empfehlungen für Ihre Lernreise
      </h1>
      <div className="flex justify-center gap-10 mr-[12.5rem] ml-[12.5rem]">
        <CardHoverEffect
          svg={<Vibrations className="w-40 h-40" />}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen."
          topic="Physik"
          level={1}
        />
        <CardHoverEffect
          svg={<Vibrations className="w-40 h-40" />}
          title="Grundlagen Geometrie"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen."
          topic="Physik"
          level={2}
        />
        <CardHoverEffect
          svg={<Vibrations className="w-40 h-40" />}
          title="Gitter"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen."
          topic="Mathe"
          level={2}
        />
        <CardHoverEffect
          svg={<Vibrations className="w-40 h-40" />}
          title="Grundlagen Logik"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen."
          topic="Mathe"
          level={3}
        />
      </div>
      <BtnPrimary label="Mehr entdecken" onClick={handleOnClick} />
    </div>
  );
};

export default LPRecommendations;
