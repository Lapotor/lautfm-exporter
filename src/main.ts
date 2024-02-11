import express from 'express';
import promClient from 'prom-client';
import ms from 'ms';
import { collectMetrics } from 'data-fetcher';
import { config } from 'config';

//promClient.collectDefaultMetrics();

console.log('Laut.fm Prometheus Exporter started! 🚀');

setInterval(() => {
  collectMetrics();
}, config.fetchInterval);

console.log(
  'Start fetching data every',
  ms(config.fetchInterval, { long: true })
);

collectMetrics();

const metricServer = express();

metricServer.get('/metrics', async (_, res) => {
  const data = await promClient.register.metrics();
  res.set('Content-Type', promClient.register.contentType);
  res.send(data);
});

metricServer.listen(config.port, () => {
  console.log(`🚨 Prometheus listening on port ${config.port} /metrics`);
});
