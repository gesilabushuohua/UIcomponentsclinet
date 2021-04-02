import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const base = /* process.env.BASE_URL
  ? process.env.BASE_URL
  :  */'http://127.0.0.1:7001'

const request = axios.create({
  baseURL: base,
  timeout: 2000
})

// 拦截请求
request.interceptors.request.use((config: AxiosRequestConfig): any => {
  // TODO 携带 token
  return config
}, (err) => {
  return Promise.reject(err)
})

const errStatusMsg: any = {
  401: '登录状态已过期',
  500: '服务器异常'
}

// 拦截响应
request.interceptors.response.use((res: AxiosResponse): any => {
  const code = res.status
  if (code < 200 || code > 300) {
    console.error(res)
    return Promise.reject(res)
  }
  const success = res.data.success
  if (!success) {
    console.error(res.data.msg)
    return Promise.reject(res)
  }
  return res.data;
}, (err: any) => {
  const code = err.status
  if (code) {
    console.error('网络请求超时')
  } else {
    const msg = errStatusMsg[code] || code
    console.error(msg)
  }
  return Promise.reject(err)
})

export const fileListRequest = (type: string) => {
  return request.get(`/file/list/${type}`)
}
