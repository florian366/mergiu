import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = valuePages.betreuung.metadata;

export default function PersoenlicheBetreuungPage() {
  return <ValuePage page={valuePages.betreuung} />;
}
