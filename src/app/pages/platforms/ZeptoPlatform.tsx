import { GenericPlatformPage } from './GenericPlatformPage';
import { zeptoPlatformConfig } from './platformConfigs';

export function ZeptoPlatform() {
  return <GenericPlatformPage config={zeptoPlatformConfig} />;
}
