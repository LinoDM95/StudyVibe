import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
interface CardNavigateCourseProps {
  title: string;
  text: string;
  img?: any;
  navPath: string;
}

const CardNavigateCourse: React.FC<CardNavigateCourseProps> = ({
  title,
  text,
  img,
  navPath,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row border-2 rounded-lg gap-10 shadow-[1px_1px_0px_black] hover:shadow-[3px_3px_0px_black] transition-all duration-300">
      <div className="flex m-10">
        <div className="">{img}</div>
        <div>
          <h1 className="font-intertight text-4xl">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
      <button
        className="bg-studyvibe-color11 hover:bg-studyvibe-color7 flex justify-center items-center rounded-r-lg border-l-2 cursor-pointer transition-all duration-300"
        onClick={() => navigate(navPath)}
      >
        <div className="flex flex-col items-center justify-center font-intertight -rotate-90 gap-2">
          <span>Jetzt lernen</span>
        </div>
      </button>
    </div>
  );
};

export default CardNavigateCourse;
