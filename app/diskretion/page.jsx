import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = valuePages.diskretion.metadata;

export default function DiskretionPage() {
  return <ValuePage page={valuePages.diskretion} />;
}
