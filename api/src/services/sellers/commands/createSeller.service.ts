import { ISeller, ISellerCreate } from "@/domain/models/seller.model"
import * as SellerDal from '@/dal/sellers.dal'

const createSellerCommand = async (payload: ISellerCreate): Promise<ISeller> => {
  const result = await SellerDal.create(payload)
  return result
}

export default createSellerCommand
