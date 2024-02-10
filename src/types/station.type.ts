import {
  LautFmPlaylist,
  LautFmStationApiUrls,
  LautFmStationImages,
  LautFmStationThirdParties,
} from '.';

export type LautFmStation = {
  name?: string;
  displayName?: string;
  spokenName?: string | null;
  pageUrl?: string;
  streamUrl?: string;
  apiUrls?: LautFmStationApiUrls;
  format?: string;
  descriptions?: string;
  djs?: string;
  location?: string;
  lat?: number;
  lng?: number;
  color?: string;
  updatedAt?: string;
  genres?: string[];
  active?: boolean;
  position?: number;
  thirdParties?: LautFmStationThirdParties;
  images?: LautFmStationImages;
  currentPlaylist?: LautFmPlaylist;
  nextPlaylist?: LautFmPlaylist;
  topArtists?: string[];
};
