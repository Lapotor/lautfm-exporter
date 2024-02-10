import { Gauge } from 'prom-client';

export const lautfm_station_active = new Gauge({
  name: 'lautfm_station_active',
  help: 'Is the Laut.fm station active',
  labelNames: ['station'],
});

export const lautfm_station_position = new Gauge({
  name: 'lautfm_station_position',
  help: 'Position of the Laut.fm station',
  labelNames: ['station'],
});

export const lautfm_station_listeners = new Gauge({
  name: 'lautfm_station_listeners',
  help: 'Number of listeners of the Laut.fm station',
  labelNames: ['station'],
});

export const lautfm_station_live = new Gauge({
  name: 'lautfm_station_live',
  help: 'Is the Laut.fm station live',
  labelNames: ['station'],
});

export const lautfm_station_current_song = new Gauge({
  name: 'lautfm_station_current_song',
  help: 'The current song of the Laut.fm station, including title, artist, and type. If 1 the song was played live.',
  labelNames: ['station', 'title', 'artist', 'type'],
});
