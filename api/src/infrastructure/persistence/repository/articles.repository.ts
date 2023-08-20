import { Article, IArticleCreate } from "@/infrastructure/persistence/models/article.model"
import IArticle from "@/domain/entities/IArticle"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"

export const getAll = async (
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IArticle[]> => {
    const offset = (pageIndex - 1) * pageSize
    return Article.findAll({
      offset: offset,
      limit: pageSize,
      order: [
        [sortfield, orderDirection]
      ]
    })
}

export const create = async (payload: IArticleCreate): Promise<IArticle> => {
  Article.getAttributes().title.field
  const article = await Article.create(payload)
  return article
}
