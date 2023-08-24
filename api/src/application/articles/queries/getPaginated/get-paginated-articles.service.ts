import IArticle from '@/domain/entities/IArticle'
import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import ArticleSortfieldEnum from '@/domain/enums/article-sortfield.enum'
import * as articleDal from '@/infrastructure/persistence/repository/articles.repository'
import PaginatedArticleListItemDto from '@/application/articles/queries/getPaginated/paginated-article-list-item.dto'

const getArticles = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<PaginatedArticleListItemDto[]> => {
  const source = await articleDal.getAll(pageIndex, pageSize, sortfield, orderDirection)

  console.log(source)

  const retVal: PaginatedArticleListItemDto[] = []
  source.forEach(a => {
    const articleItem = new PaginatedArticleListItemDto(
      a.id, a.title, a.content, 'unknown', 1
    )
    retVal.push(articleItem)
  })

  return retVal
}

export default getArticles
