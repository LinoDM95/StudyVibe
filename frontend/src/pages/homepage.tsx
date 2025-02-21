/// <reference types="vite-plugin-svgr/client" />
import HeroSection from "../components/layouts/homepage_layouts/hero_section";
import CallToAction from "../components/layouts/homepage_layouts/call_to_action_section";
import LPRecommendations from "../components/layouts/homepage_layouts/learning_path_recommendations";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <HeroSection />
      <CallToAction />
      <LPRecommendations />
    </div>
  );
};

export default Homepage;
