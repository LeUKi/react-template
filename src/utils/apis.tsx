import api, { axios } from './api';

export const postSth = (data: { id: string }) =>
  api({
    url: `/posturl`,
    method: 'post',
    data,
    timeout: 1000 * 10,
  });

export const getSth = (params: { id: string }) =>
  api({
    url: `/geturl`,
    method: 'get',
    params,
  }).then((r) => r.data.url_link);
