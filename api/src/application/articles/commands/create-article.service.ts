import { IArticleCreate } from "@/infrastructure/persistence/models/article.model"
import * as articleDal from '@/infrastructure/persistence/repositories/articles.repository'
import IArticle from "@/domain/entities/IArticle"

const createArticleCommand = async (payload: IArticleCreate): Promise<IArticle | null> => {
  // return await articleDal.create(payload)
  return null
}

export default createArticleCommand
