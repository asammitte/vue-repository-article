import { ISellerCreate } from "@/infrastructure/persistence/models/seller.model"
import * as sellerDal from '@/infrastructure/persistence/repository/sellers.repository'
import ISeller from "@/domain/entities/ISeller"

const createSellerCommand = async (payload: ISellerCreate): Promise<ISeller> => {
  return await sellerDal.create(payload)
}

export default createSellerCommand