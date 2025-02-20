/// <reference types="vite-plugin-svgr/client" />
import HeroSection from "../components/layouts/hero_section";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <HeroSection />
      <div className="flex bg-blue-100 w-full min-h-screen items-center justify-center">next content</div>
    </div>
  );
};


export default Homepage;
