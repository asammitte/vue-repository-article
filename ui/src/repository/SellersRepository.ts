import { OrderDirectionEnum } from '@/enums/common/OrderDirectionEnum'
import SellerSortfieldEnum from '@/enums/sellers/SellerSortfieldEnum'
import type { ISellersRepository } from '@/interfaces/repositories/ISellersRepository'
import type { ISellerListItem } from '@/interfaces/sellers/ISellerListItem'
import { Repository } from '@/repository/Repository'

export class SellersRepository extends Repository implements ISellersRepository {
  async getAll(
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: SellerSortfieldEnum = SellerSortfieldEnum.Name,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<ISellerListItem[]> {
    return await this.call<ISellerListItem[]>(
      'GET',
      '/api/sellers',
      {
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortfield: sortfield,
        orderDirection: orderDirection
      }
    )
  }
  
  async getPopular(amount: number): Promise<ISellerListItem[]> {
    return await this.getAll(1, amount, SellerSortfieldEnum.Rating, OrderDirectionEnum.Desc)
  }
}
