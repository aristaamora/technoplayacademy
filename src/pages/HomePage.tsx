import HeroSection from '../components/sections/HeroSection';
import WhyTechnoplay from '../components/sections/WhyTechnoplay';
import ProgramLevelsSection from '../components/sections/ProgramLevelsSection';
import TechnoplayMethod from '../components/sections/TechnoplayMethod';
import ProjectLearning from '../components/sections/ProjectLearning';
import LearningJourney from '../components/sections/LearningJourney';
import FinalCtaSection from '../components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <section className="space-y-12 pb-20">
      <HeroSection />
      <WhyTechnoplay />
      <ProgramLevelsSection />
      <TechnoplayMethod />
      <ProjectLearning />
      <LearningJourney />
      <FinalCtaSection />
    </section>
  );
}
