interface CardStaticProps {
  content: any;
}

const CardStatic: React.FC<CardStaticProps> = ({ content }) => {
  return (
    <div className="w-full h-full border-2 rounded-2xl shadow-[10px_10px_0px_black] ">
      <img
        src={content}
        alt="Example Math"
        className="w-full h-auto rounded-2xl"
      />
    </div>
  );
};

export default CardStatic;
