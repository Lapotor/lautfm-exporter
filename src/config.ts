import { Config } from 'types';
import ms from 'ms';

export const config: Config = {
  port: 9991,
  baseUrl: 'https://api.laut.fm',
  fetchInterval: ms(process.env.FETCH_INTERVAL || '5m'),
  stations: process.env.STATIONS
    ? process.env.STATIONS.split(',').map((station: string) => station.trim())
    : [],
};
