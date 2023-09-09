import type { IAuthorsRepository } from '@/interfaces/repositories/IAuthorsRepository'
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import { OrderDirectionEnum } from '@/enums/common/OrderDirectionEnum'
import { Repository } from '@/repository/Repository'
import AuthorSortfieldEnum from '@/enums/authors/AuthorSortfieldEnum'

export class AuthorsRepository extends Repository implements IAuthorsRepository {
  async getAll(
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: AuthorSortfieldEnum = AuthorSortfieldEnum.FirstName,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IAuthorListItem[]> {
    return await this.call<IAuthorListItem[]>(
      'GET',
      '/api/v1/authors',
      {
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortfield: sortfield,
        orderDirection: orderDirection
      }
    )
  }
}
