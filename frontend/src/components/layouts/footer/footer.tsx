import { Link } from "react-router-dom";
import InputField from "../../inputfields/input";
import BtnPrimary from "../../buttons/btn_primary";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  function handleOnClick() {}
  return (
    <div className="bg-studyvibe-lightBlue flex flex-col items-center p-10">
      {/* Oberer Bereich: 3 Spalten im Desktop, gestapelt auf mobilen Geräten */}
      <div className="flex flex-col md:flex-row mt-20 gap-10 md:gap-20">
        {/* Erster Spaltenblock: Kurse */}
        <div className="flex flex-col gap-5">
          <h1 className="font-intertight text-lg md:text-xl">Kurse</h1>
          <nav className="flex flex-col md:flex-row gap-5">
            <ul className="flex flex-col gap-2">
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
            <ul className="flex flex-col gap-2">
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

        {/* Zweiter Spaltenblock: Text und Email-Abonnement */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-intertight text-lg md:text-xl">Schönen Text braucht man hier</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <InputField placeholder="Email" />
            <BtnPrimary label="Abonnieren" onClick={handleOnClick} />
          </div>
        </div>

        {/* Dritter Spaltenblock: Weiteres */}
        <div className="flex flex-col gap-5">
          <h1 className="font-intertight text-lg md:text-xl">Weiteres</h1>
          <nav className="flex justify-center">
            <ul className="flex flex-col gap-2">
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

      {/* Unterer Bereich: Impressum, Datenschutz, AGB */}
      <div className="mt-10">
        <nav>
          <ul className="flex flex-col sm:flex-row justify-center gap-4">
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
