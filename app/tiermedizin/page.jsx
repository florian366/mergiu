import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors.tiermedizin.metadata;

export default function TiermedizinPage() {
  return <SectorLandingPage data={sectors.tiermedizin} />;
}
