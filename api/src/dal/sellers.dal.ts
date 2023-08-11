import { Seller, ISeller, ISellerCreate } from "@/domain/models/seller.model"


export const create = async (payload: ISellerCreate): Promise<ISeller> => {
  const ingredient = await Seller.create(payload)
  return ingredient
}
