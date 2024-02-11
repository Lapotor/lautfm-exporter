import {
  collectServerStatusMetrics,
  collectStationMetrics,
} from './collectors';
import { config } from './config';

export async function collectMetrics() {
  const promises = [
    collectServerStatusMetrics(),
    config.stations.map((station) => collectStationMetrics(station)),
  ];
  await Promise.all(promises);
}
