import type { OrderDirectionEnum } from "@/enums/common/OrderDirectionEnum"
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import type AuthorSortfieldEnum from "@/enums/authors/AuthorSortfieldEnum"

export interface IAuthorsRepository {
  getAll: (
      pageIndex?: number,
      pageSize?: number,
      sortfield?: AuthorSortfieldEnum,
      orderDirection?: OrderDirectionEnum
    ) => Promise<IAuthorListItem[]>

  getPopular: (amount?: number) => Promise<IAuthorListItem[]>
}
