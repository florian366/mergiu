import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = valuePages.persoenlich.metadata;

export default function PersoenlichPage() {
  return <ValuePage page={valuePages.persoenlich} />;
}
