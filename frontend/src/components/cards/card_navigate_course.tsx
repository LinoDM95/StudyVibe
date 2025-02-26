interface CardNavigateCourseProps {
  title: string;
  text: string;
  img?: any;
}

const CardNavigateCourse: React.FC<CardNavigateCourseProps> = ({
  title,
  text,
  img,
}) => {
  return (
    <div className="flex flex-col md:flex-row border-2 rounded-lg p-5 gap-10">
      <div className="">{img}</div>
      <div>
        <h1 className="font-intertight text-4xl">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardNavigateCourse;
