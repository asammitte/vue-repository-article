import ISeller from '@/domain/entities/ISeller'
import * as sellerDal from '@/infrastructure/persistence/repository/sellers.repository'

const getSellers = async (): Promise<ISeller[]> => {
  return await sellerDal.getAll()
}

export default getSellers
