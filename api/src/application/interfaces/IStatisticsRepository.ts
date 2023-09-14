import StatisticTypeEnum from "@/domain/enums/statistic-type.enum"

export interface IEntityStatistics {
  rating: number
}

export interface IStatisticsRepository {
  get: (parentType: StatisticTypeEnum, parentId: number) => Promise<IEntityStatistics | null>
}
