import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors.handwerk.metadata;

export default function HandwerkPage() {
  return <SectorLandingPage data={sectors.handwerk} />;
}
