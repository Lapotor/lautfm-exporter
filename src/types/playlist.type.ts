export type LautFmPlaylist = {
  id?: number;
  name?: string;
  description?: string;
  color: string;
  length?: number;
  shuffled?: boolean;
  day?: PlaylistDayEnum;
  hour?: number;
  endTime?: number;
  startsAt?: string;
  startedAt?: string;
  endsAt?: string;
};

/**
 * @export
 * @enum {string}
 */
export enum PlaylistDayEnum {
  Mon = 'mon',
  Tue = 'tue',
  Wed = 'wed',
  Thu = 'thu',
  Fri = 'fri',
  Sat = 'sat',
  Sun = 'sun',
}
