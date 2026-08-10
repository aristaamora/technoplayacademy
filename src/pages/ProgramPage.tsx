import { useParams, Navigate } from 'react-router-dom';
import { programs } from '../data/programs';
import ProgramPageLayout from '../components/program/ProgramPageLayout';
import ProgramSection from '../components/program/ProgramSection';
import ProgramDetails from '../components/program/ProgramDetails';
import ProgramExperience from '../components/program/ProgramExperience';
import ProgramProgression from '../components/program/ProgramProgression';
import ProgramPortfolio from '../components/program/ProgramPortfolio';
import ProgramCTA from '../components/program/ProgramCTA';

export default function ProgramPage() {
  const params = useParams();
  const program = programs.find((item) => item.id === params.programId);

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return (
    <ProgramPageLayout title={`${program.name} — ${program.ageRange}`} description={program.description}>
      <ProgramSection program={program} />
      <ProgramDetails program={program} />
      <ProgramExperience program={program} />
      <ProgramProgression program={program} />
      <ProgramPortfolio program={program} />
      <ProgramCTA />
    </ProgramPageLayout>
  );
}
