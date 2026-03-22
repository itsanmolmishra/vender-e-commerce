import { GenericPlatformPage } from './GenericPlatformPage';
import { nykaaPlatformConfig } from './platformConfigs';

export function NykaaPlatform() {
  return <GenericPlatformPage config={nykaaPlatformConfig} />;
}
