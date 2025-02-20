interface CardStaticProps {
  content: any;
}

const CardStatic: React.FC<CardStaticProps> = ({ content }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full border-2 shadow-[10px_10px_0px_black] rounded-2xl p-6 flex flex-col justify-between">
        <img src={content} />


      </div>
    </div>
  );
};

export default CardStatic;
