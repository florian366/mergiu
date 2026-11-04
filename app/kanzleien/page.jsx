import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors.kanzleien.metadata;

export default function KanzleienPage() {
  return <SectorLandingPage data={sectors.kanzleien} />;
}
