import { GenericPlatformPage } from './GenericPlatformPage';
import { blinkitPlatformConfig } from './platformConfigs';

export function BlinkitPlatform() {
  return <GenericPlatformPage config={blinkitPlatformConfig} />;
}
