import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"
import OrderDirectionEnum from "@/domain/enums/order-direction.enum"

export interface IPaginatedArticleItem {
  id: number
  authorId: number
  title: string
  content: string
  firstName: string
  lastName: string
  likes: number
}

export interface IArticlesRepository {
  getAll: (
    pageIndex: number,
    pageSize: number,
    sortfield: ArticleSortfieldEnum,
    orderDirection: OrderDirectionEnum
  ) => Promise<IPaginatedArticleItem[]>
}
