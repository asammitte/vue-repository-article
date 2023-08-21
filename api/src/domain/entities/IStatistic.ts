import { StatisticTypeEnum } from "@/domain/enums/statistic-type.enum"

export interface IStatistic {
  id: number
  parentType: StatisticTypeEnum
  parentId: number
  likes: number
}

export default IStatistic
