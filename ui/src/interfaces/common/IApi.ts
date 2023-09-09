import type { IArticlesRepository } from '@/interfaces/repositories/IArticlesRepository'
import type { IAuthorsRepository } from '@/interfaces/repositories/IAuthorsRepository'

interface IApi {
  articles: IArticlesRepository
  authors: IAuthorsRepository
}

export { type IApi }
