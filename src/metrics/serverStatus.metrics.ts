import { Gauge } from 'prom-client';

export const lautfm_server_running = new Gauge({
  name: 'lautfm_server_running',
  help: 'Laut.fm server running',
  labelNames: ['message'],
});
