import ValuePage from '../../components/value/ValuePage';
import { valuePages } from '../../data/value-pages';

export const metadata = {
  ...valuePages.betreuung.metadata,
  alternates: { canonical: '/persönliche-betreuung/' },
};

export default function PersoenlicheBetreuungRouteAlias() {
  return <ValuePage page={valuePages.betreuung} />;
}
