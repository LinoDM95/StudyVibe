/// <reference types="vite-plugin-svgr/client" />
import ExampleMath from "../assets/icons/ExampleMath.jpg"
import CardStatic from "../components/cards/card_static";

const Homepage = () => {
  return (
    <>
  <div className="bg-red-500">Homepage</div>
  <div className="w-150 h-100 m-5">
  <CardStatic content={ExampleMath}/>

  </div>


  </>
);
};

export default Homepage;
