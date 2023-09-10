import { IAuthorsRepository } from "@/application/interfaces/IAuthorsRepository"
import AuthorSortfieldEnum from "@/domain/enums/author-sortfield.enum"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import PaginatedAuthorListItemDto from "@/application/authors/queries/getPaginated/paginated-author-list-item.dto"

export const getPaginatedAuthors = (authorsRepository: IAuthorsRepository) => async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: AuthorSortfieldEnum = AuthorSortfieldEnum.FirstName,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<PaginatedAuthorListItemDto[]> => {
  const source = await authorsRepository.getAll(pageIndex, pageSize, sortfield, orderDirection)

  const authors: PaginatedAuthorListItemDto[] = []
  source.forEach(a => {
    const author = new PaginatedAuthorListItemDto(
      a.id, a.firstName, a.lastName, a.rating, a.totalArticles
    )
    authors.push(author)
  })

  return authors
}

export default getPaginatedAuthors
