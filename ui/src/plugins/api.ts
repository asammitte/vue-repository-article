import axios, { AxiosError, type CreateAxiosDefaults } from 'axios'
import { inject, type App, type Plugin } from 'vue'
import type { IApi } from '@/interfaces/common/IApi'
import { ArticlesRepository } from '@/repository/ArticlesRepository'

const injectionKey = Symbol('http')

export const useHttp = (): IApi => inject(injectionKey)!

const apiPlugin: Plugin = {
  install: (app: App): void => {
    const fetchOptions: CreateAxiosDefaults = {}
    const apiFetcher = axios.create(fetchOptions)

    apiFetcher.interceptors.request.use(config => {
      const token = localStorage.getItem('authtoken')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config
    })

    apiFetcher.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const retVal = {
          message: error.response?.statusText,
          code: error.response?.status,
          data: error.response?.data
        }
        return Promise.reject(retVal)
      })

      const modules: IApi = {
        articles: new ArticlesRepository(apiFetcher)
      }

    app.provide(injectionKey, modules)
  }
}

export default apiPlugin
