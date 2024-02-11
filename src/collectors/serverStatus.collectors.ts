import { fetchLautFmServerStatus } from 'api';
import { lautfm_server_running } from 'metrics';

export async function collectServerStatusMetrics() {
  const serverStatus = await fetchLautFmServerStatus();

  if (serverStatus) {
    lautfm_server_running.set(
      { message: serverStatus.message },
      serverStatus.running ? 1 : 0
    );
  }
}
