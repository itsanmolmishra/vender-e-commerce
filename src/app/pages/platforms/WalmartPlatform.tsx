import { GenericPlatformPage } from './GenericPlatformPage';
import { walmartPlatformConfig } from './platformConfigs';

export function WalmartPlatform() {
  return <GenericPlatformPage config={walmartPlatformConfig} />;
}
