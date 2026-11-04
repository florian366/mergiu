import SectorLandingPage from '../../components/sector/SectorLandingPage';
import { sectors } from '../../data/sectors';

export const metadata = sectors['facility-management'].metadata;

export default function FacilityManagementPage() {
  return <SectorLandingPage data={sectors['facility-management']} />;
}
