import BtnPrimary from "../../buttons/btn_primary";
import Rocket from "../../../assets/icons/Start-Up-Team--Streamline-Manchester 1.svg?react";
import Study from "../../../assets/icons/Online-Learning--Streamline-Manchester.svg?react";
import Teacher from "../../../assets/icons/Mathematician--Streamline-Manchester.svg?react";

interface WhySectionProps {}

const WhySection: React.FC<WhySectionProps> = ({}) => {
  function handleOnClick() {}
  return (
    <div className="bg-studyvibe-lightBlue flex flex-col w-screen items-center justify-center gap-10">
      <h1 className="font-intertight text-2xl md:text-4xl mt-10">
        Warum unsere Platform die richtige Entscheidung ist?
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-20">
        <Rocket className="hidden md:block" />
        <div className="flex flex-col">
          <h1 className="font-intertight text-lg md:text-2xl">
            Innovative Lernmethoden
          </h1>
          <p className="font-inter">
            Wir verwenden innovative Lernmethoden und
          </p>
          <p className="font-inter">
            Technologien, um Mathematik auf eine interaktive und
          </p>
          <p className="font-inter">
            ansprechende Weise zu vermitteln. Durch den Einsatz
          </p>
          <p className="font-inter">
            von interaktiven Übungen, Videos, Simulationen und
          </p>
          <p className="font-inter">
            mehr schaffen wir eine dynamische Lernumgebung, die
          </p>
          <p className="font-inter">
            Schülern dabei hilft, ihr Verständnis zu vertiefen.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  items-center gap-20">
        <div className="flex flex-col">
          <h1 className="font-intertight text-lg md:text-2xl">
            Flexibilität und Zugänglichkeit
          </h1>
          <p className="font-inter">
            Unsere Online-Lernplattform bietet Flexibilität und
          </p>
          <p className="font-inter">
            Zugänglichkeit für Schüler aller Altersgruppen und
          </p>
          <p className="font-inter">
            Bildungsniveaus. Mit der Möglichkeit, von überall und zu
          </p>
          <p className="font-inter">
            jeder Zeit auf das Lernmaterial zuzugreifen, können
          </p>
          <p className="font-inter">
            Schüler ihr Lernen in ihren eigenen Zeitplan integrieren
          </p>
          <p className="font-inter">
            und in ihrem eigenen Tempo voranschreiten.
          </p>
        </div>
        <Study className="hidden md:block" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20">
        <Teacher className="hidden md:block" />
        <div className="flex flex-col">
          <h1 className="font-intertight text-lg md:text-2xl">
            Unsere Lehrplan im Überblick
          </h1>
          <p className="font-inter">
            Unser Lehrplan umfasst alle relevanten mathematischen
          </p>
          <p className="font-inter">
            Konzepte und Themen, die Schüler während ihrer
          </p>
          <p className="font-inter">
            Schulzeit lernen müssen. Von Grundlagen wie Arithmetik
          </p>
          <p className="font-inter">
            und Algebra bis hin zu fortgeschritteneren Themen wie
          </p>
          <p className="font-inter">
            Differentialrechnung und Wahrscheinlichkeitsrechnung
          </p>
          <p className="font-inter">
            bieten wir eine umfassende Abdeckung, die Schüler auf
          </p>
          <p className="font-inter">jede Herausforderung vorbereitet.</p>
        </div>
      </div>
      <BtnPrimary label="Kostenlos testen" onClick={handleOnClick} />
    </div>
  );
};

export default WhySection;
