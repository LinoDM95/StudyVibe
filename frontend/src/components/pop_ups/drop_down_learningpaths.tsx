import DropDownBase from "./drop_down_base";

interface DropDownLearningpathsProps {
  openStatus: boolean;
  onChange?: (isActive: boolean) => void;
}

const DropDownLearningpaths: React.FC<DropDownLearningpathsProps> = ({
  openStatus,
  onChange,
}) => {
  return (
    <div className="flex w-auto">
      <DropDownBase openStatus={openStatus} onChange={onChange}>
        <div className="flex">
          <div>
            <div>
              <h1 className="font-intertight">Mathe</h1>
            </div>
            <nav>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </div>

          <div>
            <div>
              <h1 className="font-intertight">Physik</h1>
            </div>
            <nav>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </div>

          <div>
            <div>
              <h1 className="font-intertight">Informatik</h1>
            </div>
            <nav>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
        <div>Alle Lernpfade</div>
      </DropDownBase>
    </div>
  );
};
export default DropDownLearningpaths;
