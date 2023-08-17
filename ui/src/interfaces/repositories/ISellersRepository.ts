import type { ISellerListItem } from '@/interfaces/sellers/ISellerListItem'
import type { OrderDirectionEnum } from "@/enums/common/OrderDirectionEnum";
import type SellerSortfieldEnum from "@/enums/sellers/SellerSortfieldEnum";

export interface ISellersRepository {
  getAll: (
      pageIndex?: number,
      pageSize?: number,
      sortfield?: SellerSortfieldEnum,
      orderDirection?: OrderDirectionEnum
    ) => Promise<ISellerListItem[]>

  getPopular: (amount: number) => Promise<ISellerListItem[]>
}
