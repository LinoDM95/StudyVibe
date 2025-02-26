import BtnPrimary from "../buttons/btn_primary";
import CardLearningPathLarge from "../cards/card_learningpath_large";
import CardNavigateCourse from "../cards/card_navigate_course";

interface Course {
  title: string;
  text: string;
  img?: any;
}

interface LearningpathLayoutProps {
  coursesArray: Course[];
  title: string;
  text: string;
  duration: number;
  difficulty: 1 | 2 | 3;
  img?: any;
}

const LearningpathLayout: React.FC<LearningpathLayoutProps> = ({
  coursesArray,
  duration,
  difficulty,
  img,
  title,
  text,
}) => {
  const courses = coursesArray;
  return (
    <div className="flex flex-col items-center mx-5 sm:mx-10 lg:mx-50 gap-20 mt-20 mb-20">
      <CardLearningPathLarge
        title={title}
        text={text}
        difficulty={difficulty}
        duration={duration}
        countCurses={courses.length}
        img={img}
      />

      <div className="flex flex-col gap-5">
        {courses.map((course, index) => (
          <CardNavigateCourse
            key={index}
            title={course.title}
            text={course.text}
            img={course.img}
          />
        ))}
      </div>
      <BtnPrimary label="Kostenlos testen" onClick={() => console.log()} />
    </div>
  );
};

export default LearningpathLayout;
