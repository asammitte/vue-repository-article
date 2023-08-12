import ISeller from '@/domain/entities/ISeller'
import * as sellerDal from '@/infrastructure/persistence/dal/sellers.dal'

const getSellers = async (): Promise<ISeller[]> => {
  return await sellerDal.getAll()
}

export default getSellers
