import { OrderDirectionEnum } from '@/enums/common/OrderDirectionEnum'
import ArticleSortfieldEnum from '@/enums/articles/ArticleSortfieldEnum'
import type { IArticlesRepository } from '@/interfaces/repositories/IArticlesRepository'
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem'
import { Repository } from '@/repository/Repository'

export class ArticlesRepository extends Repository implements IArticlesRepository {
  async getAll(
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IArticleListItem[]> {
    return await this.call<IArticleListItem[]>(
      'GET',
      '/api/articles',
      {
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortfield: sortfield,
        orderDirection: orderDirection
      }
    )
  }
}
