import { IAuthorsRepository, IPaginatedAuthorItem } from '@/application/interfaces/IAuthorsRepository'
import { QueryTypes } from "sequelize"
import AuthorSortfieldEnum from '@/domain/enums/author-sortfield.enum'
import BaseRepository from '@/infrastructure/persistence/repositories/base.repository'
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import StatisticTypeEnum from '@/domain/enums/statistic-type.enum'

export default class AuthorsRepository extends BaseRepository implements IAuthorsRepository {
  public getAll = async (
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: AuthorSortfieldEnum = AuthorSortfieldEnum.FirstName,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IPaginatedAuthorItem[]> => {
    const offset = (pageIndex - 1) * pageSize
    const direction = orderDirection == OrderDirectionEnum.Asc ? 'ASC' : 'DESC'

    let sortfieldParam = ''
    switch (sortfield) {
      case AuthorSortfieldEnum.FirstName:
        sortfieldParam = 'firstName'
        break
      case AuthorSortfieldEnum.LastName:
        sortfieldParam = 'lastName'
        break
      case AuthorSortfieldEnum.Rating:
        sortfieldParam = 'rating'
        break
      case AuthorSortfieldEnum.Id:
        sortfieldParam = 'id'
        break
      default:
        const exhaustiveCheck: never = sortfield
        throw new Error(exhaustiveCheck)
    }

    const response = await this.db.query<IPaginatedAuthorItem>(`\
      SELECT authors.id AS id, first_name AS firstName, last_name AS lastName, likes AS rating \
      FROM authors \
      JOIN statistics ON authors.id = statistics.parent_id AND statistics.parent_type = ${StatisticTypeEnum.Author} \ 
      ORDER BY ${sortfieldParam} ${direction} \
      LIMIT :limit OFFSET :offset \
    `, { 
      type: QueryTypes.SELECT,
      replacements: {
        offset: offset,
        limit: pageSize
      }
    })

    return response
  }
}
