import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = valuePages.provisionsfrei.metadata;

export default function ProvisionsfreiPage() {
  return <ValuePage page={valuePages.provisionsfrei} />;
}
