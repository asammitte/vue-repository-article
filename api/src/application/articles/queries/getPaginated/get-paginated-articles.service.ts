import { IArticlesRepository } from '@/application/interfaces/IArticlesRepository'
import ArticleSortfieldEnum from '@/domain/enums/article-sortfield.enum'
import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import PaginatedArticleListItemDto from '@/application/articles/queries/getPaginated/paginated-article-list-item.dto'

const getArticles = (articlesRepository: IArticlesRepository) => async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<PaginatedArticleListItemDto[]> => {
  const source = await articlesRepository.getAll(pageIndex, pageSize, sortfield, orderDirection)

  const retVal: PaginatedArticleListItemDto[] = []
  source.forEach(a => {
    const articleItem = new PaginatedArticleListItemDto(
      a.id, a.title, a.content, a.likes, a.authorId, `${a.firstName} ${a.lastName}`
    )
    retVal.push(articleItem)
  })

  return retVal
}

export default getArticles
