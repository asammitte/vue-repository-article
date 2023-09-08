import AuthorSortfieldEnum from "@/domain/enums/author-sortfield.enum"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"

export interface IPaginatedAuthorItem {
  id: number
  firstName: string
  lastName: string
  rating: number
}

export interface IAuthorsRepository {
  getAll: (
    pageIndex: number,
    pageSize: number,
    sortfield: AuthorSortfieldEnum,
    orderDirection: OrderDirectionEnum
  ) => Promise<IPaginatedAuthorItem[]>
}
