import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"

export interface IPaginatedArticleItem {
  id: number
  title: string
  content: string
  first_name: string
  last_name: string
}

export interface IArticlesRepository {
  getAll: (
    pageIndex: number,
    pageSize: number,
    sortfield: ArticleSortfieldEnum,
    orderDirection: OrderDirectionEnum
  ) => Promise<IPaginatedArticleItem[]>
}
