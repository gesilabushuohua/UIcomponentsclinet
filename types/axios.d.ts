import * as axios from 'axios'

declare module 'axios' {

  interface AxiosResponse {
    status: number;
    message: string;
  }

  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>,
    (response: AxiosResponse): Promise<any>
  }

 
}
