import CardLearningPath from "../components/cards/card_learning_path";

const AllLearningPaths = () => {




  return (
<div className=" flex w-180">
<CardLearningPath difficulty={1} title="Schwingungen" description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen," duration={2} countCourses={5}/>
<CardLearningPath difficulty={2} title="Schwingungen" description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen," duration={2} countCourses={5}/>
<CardLearningPath difficulty={3} title="Schwingungen" description="Auch gibt es niemanden, der den Schmerz an sich liebt den Umständen  niemanden, der den Schmerz an sich liebt den Umständen," duration={2} countCourses={5}/>
</div>

  );
};

export default AllLearningPaths;
