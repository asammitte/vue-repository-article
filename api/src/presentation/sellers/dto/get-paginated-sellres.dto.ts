import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import SellerSortfieldEnum from '@/domain/enums/seller-sortfield.enum'
import { object, mixed, number } from 'yup'

export interface IGetPaginatedSellers {
  pageIndex: number
  pageSize: number
  sortfield: SellerSortfieldEnum
  orderDirection: OrderDirectionEnum
}

export default object({
  query: object<IGetPaginatedSellers>({
    pageIndex: number().default(1),
    pageNumber: number().default(10).required(),
    sortfield: mixed<SellerSortfieldEnum>().oneOf(Object.values(SellerSortfieldEnum)),
    orderDirection: mixed<OrderDirectionEnum>().oneOf(Object.values(OrderDirectionEnum))
  })
})
