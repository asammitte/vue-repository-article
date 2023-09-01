import { IPaginatedArticleItem } from '@/application/interfaces/IArticlesRepository'
import { QueryTypes } from "sequelize"
import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"
import BaseRepository from '@/infrastructure/persistence/repositories/base.repository'
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import StatisticTypeEnum from '@/domain/enums/statistic-type.enum'

export default class ArticlesRepository extends BaseRepository {
  public getAll = async (
    pageIndex: number = 1,
    pageSize: number = 10,
    sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
    orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
  ): Promise<IPaginatedArticleItem[]> => {
    const offset = (pageIndex - 1) * pageSize
    const direction = orderDirection == OrderDirectionEnum.Asc ? 'ASC' : 'DESC'

    const response = await this.db.query<IPaginatedArticleItem>(`\
  SELECT articles.id AS id, title, content, first_name, last_name, likes \
  FROM articles \
  JOIN authors au ON articles.author_id = au.id \
  JOIN statistics ON articles.id = statistics.parent_id AND statistics.parent_type = ${StatisticTypeEnum.Article} \ 
  ORDER BY :sortfield ${direction} \
  LIMIT :limit OFFSET :offset \
    `, { 
      type: QueryTypes.SELECT,
      replacements: {
        offset: offset,
        limit: pageSize,
        sortfield: sortfield
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
