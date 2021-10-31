import {store} from '@store/index';
import {logout} from '@store/slices/userSlice';
import axios, {AxiosError, AxiosResponse} from 'axios';

const API_URL = 'https://books.ioasys.com.br/api/v1';

interface IRequest {
  path: string;
  needAuth?: boolean;
  data?: any;
}

axios.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  },
);

export function doPost<Type>({
  path,
  data,
  needAuth,
}: IRequest): Promise<AxiosResponse<Type>> {
  const headers = {} as any;
  if (needAuth) {
    const {token} = store.getState().user.data;
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.post(API_URL + path, data, {headers});
}

export function doGet<Type>({
  path,
  data,
  needAuth,
}: IRequest): Promise<AxiosResponse<Type>> {
  const headers = {} as any;
  if (needAuth) {
    const {token} = store.getState().user.data;
    headers.authorization = `Bearer ${token}`;
  }
  return axios.get(API_URL + path, {params: data, headers});
}
