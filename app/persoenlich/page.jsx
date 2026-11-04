import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = {
  ...valuePages.persoenlich.metadata,
  alternates: { canonical: '/persönlich/' },
};

export default function PersoenlichRouteAlias() {
  return <ValuePage page={valuePages.persoenlich} />;
}
