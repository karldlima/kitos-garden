import qs from 'qs';

import { apiClient } from './api';

function getURL(path = '') {
  return `${process.env.NEXT_PUBLIC_CMS_API_URL}${path}`;
}

export function getMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  return `${getURL(url)}`;
}

export async function getEntry<T>(
  path: string,
  urlParamsObject = {},
): Promise<T> {
  const queryString = qs.stringify(urlParamsObject);
  const response = await apiClient.get<T>(
    `/api${path}${queryString ? `?${queryString}` : ''}`,
  );
  const data = await response.data;
  return data;
}
