import LearningpathLayout from "../components/layouts/learningpath_layout";
import ExampleSVG from "../assets/topics/Vibrations.svg?react"


const LearningPathExample = () => {

  const courses = [
    { title: "Schwingungen", text: "Wir haben sorgfältig alle Kurse in der richtigen  Renfolge angeordnet, damit Sie sich ohne Ablenkungen", img: <ExampleSVG /> },
    { title: "Mechanik", text: "Wir haben sorgfältig alle Kurse in der richtigen  Renfolge angeordnet, damit Sie sich ohne Ablenkungen", img: <ExampleSVG /> },
    { title: "Elektrodynamik", text: "Wir haben sorgfältig alle Kurse in der richtigen  Renfolge angeordnet, damit Sie sich ohne Ablenkungen", img: <ExampleSVG /> },
    { title: "Optik", text: "Wir haben sorgfältig alle Kurse in der richtigen  Renfolge angeordnet, damit Sie sich ohne Ablenkungen" , img: <ExampleSVG />},
    { title: "Quantenphysik", text: "Wir haben sorgfältig alle Kurse in der richtigen  Renfolge angeordnet, damit Sie sich ohne Ablenkungen" , img: <ExampleSVG />},
  ];


  return (
    <div className="">
      <LearningpathLayout title="Example Lernpfad" text="Wir haben sorgfältig alle Kurse in der richtigen Reihenfolge angeordnet, damit Sie sich ohne Ablenkungen voll und ganz dem Lernen widmen können. Beginnen Sie jetzt und erleben Sie einen reibungslosen Lernfortschritt!" difficulty={2} duration={6} coursesArray={courses} />
    </div>
  );
};

export default LearningPathExample;
