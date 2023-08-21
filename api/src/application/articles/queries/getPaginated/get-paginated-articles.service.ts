import IArticle from '@/domain/entities/IArticle'
import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import ArticleSortfieldEnum from '@/domain/enums/article-sortfield.enum'
import * as articleDal from '@/infrastructure/persistence/repository/articles.repository'

const getArticles = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<IArticle[]> => {
  return await articleDal.getAll(pageIndex, pageSize, sortfield, orderDirection)
}

export default getArticles
