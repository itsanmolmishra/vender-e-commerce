import { Navigate, useParams } from 'react-router';
import { GenericClientPage } from './GenericClientPage';
import { clientPageConfigs } from './clientConfigs';

export function ClientBrandPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !clientPageConfigs[slug]) {
    return <Navigate to="/" replace />;
  }
  return <GenericClientPage config={clientPageConfigs[slug]} />;
}
