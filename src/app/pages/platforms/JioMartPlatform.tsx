import { GenericPlatformPage } from './GenericPlatformPage';
import { jiomartPlatformConfig } from './platformConfigs';

export function JioMartPlatform() {
  return <GenericPlatformPage config={jiomartPlatformConfig} />;
}
