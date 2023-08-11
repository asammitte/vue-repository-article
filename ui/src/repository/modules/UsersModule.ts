import { OrderDirectionEnum } from '@/enums/common/OrderDirectionEnum'
import { Repository } from '@/repository/Repository'

export class UsersModule extends Repository {
  async getPaginated(): Promise<PaginatedModel<UserListItem>> {
    return await this.call('GET', 'users', { sortfield: 'scores', direction: OrderDirectionEnum.Desc })
  }
}
