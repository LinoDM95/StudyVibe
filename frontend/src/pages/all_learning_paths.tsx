import CardLearningPath from "../components/cards/card_learning_path";
import LearningPathGrid from "../components/layouts/learningpath/learningpath_grid";
import HeroSectionLayout from "../components/layouts/herosection_layout";
import Example from "../assets/examples/Example1.svg?react";
import BannerWithBtn from "../components/box/banner_with_btn";

const AllLearningPaths = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 w-full max-w-screen-lg mx-auto min-h-screen mt-20 mb-20">
      <HeroSectionLayout
        title1="Unsere Zielgerichteten"
        title2="Lernpfade"
        description="Wir haben sorgfältig alle Kurse in der richtigen Reihenfolge angeordnet, damit Sie sich ohne Ablenkungen voll und ganz dem Lernen widmen können. Beginnen Sie jetzt und erleben Sie einen reibungslosen Lernfortschritt!"
        svg={<Example />}
      />
      <LearningPathGrid title="Mathe Lernpfade">
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
      </LearningPathGrid>
      <LearningPathGrid title="Physik Lernpfade">
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
      </LearningPathGrid>
      <LearningPathGrid title="Informatik Lernpfade">
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={1}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={2}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
        <CardLearningPath
          difficulty={3}
          title="Schwingungen"
          description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen,"
          duration={2}
          countCourses={5}
        />
      </LearningPathGrid>
      <BannerWithBtn
        text="Schließe dich unserer großen Gemeinschaft von Lernenden an und starte noch heute deine Reise!"
        buttonLabel="Lernen starten"
        onClick={() => console.log("filler")}
      />
    </div>
  );
};

export default AllLearningPaths;
