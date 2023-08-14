import { Seller, ISellerCreate } from "@/infrastructure/persistence/models/seller.model"
import ISeller from "@/domain/entities/ISeller"
import OrderDirectionEnum from "@/domain/enums/orderDirection.enum"
import SellerSortfieldEnum from "@/domain/enums/sellerSortfield.enum"

export const getAll = async (
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: SellerSortfieldEnum = SellerSortfieldEnum.Name,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<ISeller[]> => {
    const offset = (pageIndex - 1) * pageSize
    return Seller.findAll({
      offset: offset,
      limit: pageSize,
      order: [
        [sortfield, orderDirection]
      ]
    })
}

export const create = async (payload: ISellerCreate): Promise<ISeller> => {
  Seller.getAttributes().name.field
  const ingredient = await Seller.create(payload)
  return ingredient
}
