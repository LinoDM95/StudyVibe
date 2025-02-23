import Timeline from "../../ui/timeline";
import BtnPrimary from "../../buttons/btn_primary";

interface LearningPathSectionProps {}

const LearningPathSection: React.FC<LearningPathSectionProps> = ({}) => {
  function handleOnClick() {

  }
  return (
    <div className="flex flex-col items-center gap-10">
      <Timeline />
      <div className="flex flex-col font-manrope">
        <span>Mit der Möglichkeit, unsere Plattform für 5 Tage kostenlos zu nutzen, können</span>
        <span>Sie sich in aller Ruhe von unserem Angebot überzeugen und feststellen, ob</span>
        <span>es Ihren Bedürfnissen entspricht.</span>
      </div>
      <BtnPrimary label="Kostenlos testen" onClick={handleOnClick}/>
    </div>
  );
};

export default LearningPathSection;
