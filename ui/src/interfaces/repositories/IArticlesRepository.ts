import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem'
import type { OrderDirectionEnum } from "@/enums/common/OrderDirectionEnum";
import type ArticleSortfieldEnum from "@/enums/articles/ArticleSortfieldEnum";

export interface IArticlesRepository {
  getAll: (
      pageIndex?: number,
      pageSize?: number,
      sortfield?: ArticleSortfieldEnum,
      orderDirection?: OrderDirectionEnum
    ) => Promise<IArticleListItem[]>
}
