import { StatisticTypeEnum } from "@domain/enums/statistic-type-enum"

export interface IStatistic {
  id: number
  parentType: StatisticTypeEnum
  parentId: number
  rating: number
  totalArticles: number
}

export default IStatistic
