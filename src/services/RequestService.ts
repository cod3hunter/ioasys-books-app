import axios, {AxiosResponse} from 'axios';

const API_URL = 'https://books.ioasys.com.br/api/v1';

interface IRequest {
  path: string;
  needAuth?: boolean;
  data?: {};
}

export function doPost<Type>({
  path,
  data,
}: IRequest): Promise<AxiosResponse<Type>> {
  return axios.post(API_URL + path, data);
}
