import { fetchCurrentSong, fetchStation, fetchStationListeners } from '../api';
import {
  lautfm_station_active,
  lautfm_station_current_song,
  lautfm_station_listeners,
  lautfm_station_live,
  lautfm_station_position,
} from '../metrics';

export async function collectStationMetrics(station: string): Promise<void> {
  const stationResponse = await fetchStation(station);
  const currentSong = await fetchCurrentSong(station);
  const listeners = await fetchStationListeners(station);

  if (stationResponse) {
    lautfm_station_active.set(
      {
        station: station,
      },
      stationResponse.active ? 1 : 0
    );
    if (stationResponse.position !== undefined)
      lautfm_station_position.set(
        { station: station },
        stationResponse.position
      );
  }
  if (currentSong) {
    lautfm_station_current_song.set(
      {
        station: station,
        title: currentSong.title ?? '',
        artist: currentSong.artist?.name ?? '',
        type: currentSong.type ?? '',
      },
      currentSong?.live ? 1 : 0
    );

    lautfm_station_live.set({ station: station }, currentSong.live ? 1 : 0);
  }
  if (listeners) {
    lautfm_station_listeners.set(
      {
        station: station,
      },
      listeners
    );
  }
}
