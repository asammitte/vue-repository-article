import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import ArticleSortfieldEnum from '@/domain/enums/article-sortfield.enum'
import { object, mixed, number } from 'yup'

export interface IGetPaginatedArticles {
  pageIndex: number
  pageSize: number
  sortfield: ArticleSortfieldEnum
  orderDirection: OrderDirectionEnum
}

export default object({
  query: object<IGetPaginatedArticles>({
    pageIndex: number().default(1),
    pageNumber: number().default(10).required(),
    sortfield: mixed<ArticleSortfieldEnum>().oneOf(Object.values(ArticleSortfieldEnum)),
    orderDirection: mixed<OrderDirectionEnum>().oneOf(Object.values(OrderDirectionEnum))
  })
})
