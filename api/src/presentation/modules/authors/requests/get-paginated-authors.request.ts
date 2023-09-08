import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import AuthorSortfieldEnum from '@/domain/enums/author-sortfield.enum'
import { object, mixed, number } from 'yup'

export interface IGetPaginatedAuthors {
  pageIndex: number
  pageSize: number
  sortfield: AuthorSortfieldEnum
  orderDirection: OrderDirectionEnum
}

export default object({
  query: object<IGetPaginatedAuthors>({
    pageIndex: number().default(1),
    pageNumber: number().default(10).required(),
    sortfield: mixed<AuthorSortfieldEnum>().oneOf(Object.values(AuthorSortfieldEnum)),
    orderDirection: mixed<OrderDirectionEnum>().oneOf(Object.values(OrderDirectionEnum))
  })
})
