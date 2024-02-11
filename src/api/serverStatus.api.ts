import axios from 'axios';
import { LautFmServerStatus } from '../types';
import { config } from '../config';

export async function fetchLautFmServerStatus(): Promise<
  LautFmServerStatus | undefined
> {
  const result = await axios<LautFmServerStatus>({
    url: `${config.baseUrl}/server_status`,
  });
  if (result.status === 200) {
    return result.data;
  } else {
    return undefined;
  }
}
