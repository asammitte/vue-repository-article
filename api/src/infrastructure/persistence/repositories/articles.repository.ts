import { db } from '@/infrastructure/persistence/databaseInit'
import { IPaginatedArticleItem } from '@/application/interfaces/IArticlesRepository'
import { QueryTypes } from "sequelize"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"

export const getAll = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  sortfield: ArticleSortfieldEnum = ArticleSortfieldEnum.Title,
  orderDirection: OrderDirectionEnum = OrderDirectionEnum.Asc
): Promise<IPaginatedArticleItem[]> => {
  const offset = (pageIndex - 1) * pageSize
  const direction = orderDirection == OrderDirectionEnum.Asc ? 'ASC' : 'DESC'

  const response = await db.query<IPaginatedArticleItem>(`\
SELECT articles.id AS id, title, content, first_name, last_name \
FROM articles JOIN authors au ON articles.author_id = au.id \
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

// export const create = (payload: IArticleCreate): Promise<IArticle> => {
//   Article.getAttributes().title.field
//   const article = Article.create(payload)
//   return article
// }
