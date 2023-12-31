import { IArticlesRepository, IPaginatedArticleItem } from '@/application/interfaces/IArticlesRepository'
import { QueryTypes } from "sequelize"
import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"
import BaseRepository from '@/infrastructure/persistence/repositories/base.repository'
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import StatisticTypeEnum from '@/domain/enums/statistic-type.enum'

export default class ArticlesRepository extends BaseRepository implements IArticlesRepository {
  public getAll = async (
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IPaginatedArticleItem[]> => {
    const offset = (pageIndex - 1) * pageSize
    const direction = orderDirection == OrderDirectionEnum.Asc ? 'ASC' : 'DESC'

    let sortfieldParam = ''
    switch (sortfield) {
      case ArticleSortfieldEnum.Id:
        sortfieldParam = 'id'
        break
      case ArticleSortfieldEnum.Title:
        sortfieldParam = 'title'
        break
      default:
        const exhaustiveCheck: never = sortfield
        throw new Error(exhaustiveCheck)
    }

    const response = await this.db.query<IPaginatedArticleItem>(`\
        SELECT articles.id AS id, title, content, au.id AS authorId, first_name AS firstName, last_name AS lastName, likes \
        FROM articles \
        JOIN authors au ON articles.author_id = au.id \
        JOIN statistics ON articles.id = statistics.parent_id AND statistics.parent_type = ${StatisticTypeEnum.Article} \ 
        ORDER BY ${sortfield} ${direction} \
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

// export const create = (payload: IArticleCreate): Promise<IArticle> => {
//   Article.getAttributes().title.field
//   const article = Article.create(payload)
//   return article
// }
