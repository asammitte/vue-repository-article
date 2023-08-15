import ISeller from '@/domain/entities/ISeller'
import OrderDirectionEnum from '@/domain/enums/order-direction.enum'
import SellerSortfieldEnum from '@/domain/enums/seller-sortfield.enum'
import * as sellerDal from '@/infrastructure/persistence/repository/sellers.repository'

const getSellers = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: SellerSortfieldEnum = SellerSortfieldEnum.Name,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<ISeller[]> => {
  return await sellerDal.getAll(pageIndex, pageSize, sortfield, orderDirection)
}

export default getSellers
