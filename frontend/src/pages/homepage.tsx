/// <reference types="vite-plugin-svgr/client" />
import HeroSectionHP from "../components/layouts/homepage_layouts/hero_section_hp";
import CallToAction from "../components/layouts/homepage_layouts/call_to_action_section";
import LPRecommendations from "../components/layouts/homepage_layouts/learning_path_recommendations";
import LearningPathSection from "../components/layouts/homepage_layouts/learning_path_section";
import WhySection from "../components/layouts/homepage_layouts/why_section";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10">
      <HeroSectionHP />
      <CallToAction />
      <LPRecommendations />
      <LearningPathSection />
      <WhySection />
    </div>
  );
};

export default Homepage;
