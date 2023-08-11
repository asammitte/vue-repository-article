import { AxiosError, type AxiosInstance } from 'axios'
import { type IRepository } from '@/interfaces/repository/IRepository'

export class Repository implements IRepository {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  public async call<T>(method: HttpMethod, url: string, query?: object, payload?: any): Promise<T> {
    try {
      const { data } =  await this.httpClient.request<T>({
        method: method,
        url: url,
        params: query,
        data: payload
      })

      return data
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return Promise.reject({
          status: error.status
        })
      }

      return Promise.reject(false)
    }
  }
}
