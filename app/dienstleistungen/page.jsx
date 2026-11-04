import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors.dienstleistungen.metadata;

export default function DienstleistungenPage() {
  return <SectorLandingPage data={sectors.dienstleistungen} />;
}
