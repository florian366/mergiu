import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = valuePages.netzwerk.metadata;

export default function NetzwerkPage() {
  return <ValuePage page={valuePages.netzwerk} />;
}
