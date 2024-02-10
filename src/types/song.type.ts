import { LautFmArtist } from '.';

export type LautFmSong = {
  id?: number;
  live?: boolean;
  type?: string;
  title?: string;
  album?: string;
  length?: number;
  genre?: string;
  releaseyear?: number;
  createdAt?: string;
  artist?: LautFmArtist;
  startedAt?: string;
  endsAt?: string;
};
