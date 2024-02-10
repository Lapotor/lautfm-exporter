import axios from 'axios';
import { config } from '../config';
import { LautFmSong, LautFmStation } from '../types';

/**
 * Fetches a LautFmStation by its name.
 * @param {string} station - The name of the station to fetch.
 * @returns {Promise<LautFmStation | undefined>} A Promise that resolves to a LautFmStation object if successful, or undefined if unsuccessful.
 */
export async function fetchStation(
  station: string
): Promise<LautFmStation | undefined> {
  const result = await axios({
    url: `${config.baseUrl}/station/${station}`,
  });
  if (result.status === 200) {
    return result.data as LautFmStation;
  } else {
    return undefined;
  }
}

/**
 * Fetches the current song for a given station.
 * @param {string} station - The name of the station.
 * @returns {Promise<LautFmSong | undefined>} A Promise that resolves to the current song (LautFmSong) if successful, otherwise undefined.
 */
export async function fetchCurrentSong(
  station: string
): Promise<LautFmSong | undefined> {
  const result = await axios({
    url: `${config.baseUrl}/station/${station}/current_song`,
  });
  if (result.status === 200) {
    return result.data as LautFmSong;
  } else {
    return undefined;
  }
}

/**
 * Fetches the last songs played on a station.
 * @param {string} station - The name of the station.
 * @returns {Promise<LautFmSong[] | undefined>} A promise that resolves to an array of LautFmSong objects if successful, otherwise undefined.
 */
export async function fetchLastSongs(
  station: string
): Promise<LautFmSong[] | undefined> {
  const result = await axios({
    url: `${config.baseUrl}/station/${station}/last_songs`,
  });
  if (result.status === 200) {
    return result.data as LautFmSong[];
  } else {
    return undefined;
  }
}

/**
 * Fetches the number of listeners for a given station.
 * @param {station} station - The name of the station.
 * @returns {Promise<number | undefined>} A Promise that resolves to the number of listeners, or undefined if the request fails.
 */
export async function fetchStationListeners(
  station: string
): Promise<number | undefined> {
  const result = await axios({
    url: `${config.baseUrl}/station/${station}/listeners`,
  });
  if (result.status === 200) {
    return result.data as number;
  } else {
    return undefined;
  }
}
