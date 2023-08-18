import { IArticleCreate } from "@/infrastructure/persistence/models/article.model"
import * as articleDal from '@/infrastructure/persistence/repository/articles.repository'
import IArticle from "@/domain/entities/IArticle"

const createArticleCommand = async (payload: IArticleCreate): Promise<IArticle> => {
  return await articleDal.create(payload)
}

export default createArticleCommand
