import { Link } from "react-router-dom";
import InputField from "../../inputfields/input";
import BtnPrimary from "../../buttons/btn_primary";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  function handleOnClick() {}
  return (
    <div className="bg-studyvibe-lightBlue flex flex-col items-center p-10">
      <div className="flex mt-20 gap-5 md:gap-50">
        <div className="flex flex-col gap-5">
          <h1 className="font-intertight">Kurse</h1>
          <nav className="flex items-center gap-10">
            <ul>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
            </ul>
            <ul>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kurs</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h1 className="font-intertight">Schönen Text braucht man hier</h1>
          <div className="flex gap-3">
          <InputField placeholder="Email"/>
          <BtnPrimary label="Abonnieren" onClick={handleOnClick}/>
          </div>
          
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-intertight ">Weiteres</h1>
          <nav className="flex items-center gap-10">
            <ul>
              <li className="font-manrope">
                <Link to="/">Warum wir?</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Lernpfade</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Kontakt</Link>
              </li>
              <li className="font-manrope">
                <Link to="/">Preise</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="items-center ">
        <nav className="">
          <ul className="flex gap-31">
            <li className="font-manrope">
              <Link to="/">Impressum</Link>
            </li>
            <li className="font-manrope">
              <Link to="/">Datenschutz</Link>
            </li>
            <li className="font-manrope">
              <Link to="/">AGB</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
