import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors.einzelhandel.metadata;

export default function EinzelhandelPage() {
  return <SectorLandingPage data={sectors.einzelhandel} />;
}
