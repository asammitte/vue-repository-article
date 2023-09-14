import { IStatisticsRepository } from "@/application/interfaces/IStatisticsRepository"
import EntityStatisticsDto from "@/application/statistics/queries/getEntityStatistics/entity-statistics.dto"
import NotFoundError from "@/application/exceptions/not-found.error"
import StatisticTypeEnum from "@/domain/enums/statistic-type.enum"

export const getEntityStatistics = (statisticsRepository: IStatisticsRepository) => async (
  parentType: StatisticTypeEnum,
  parentId: number
): Promise<EntityStatisticsDto> => {
  const source = await statisticsRepository.get(parentType, parentId)
  if (source == null) {
    throw new NotFoundError(`Stats for ${parentType}: ${parentId} not found!`)
  }

  return new EntityStatisticsDto(source.rating)
}

export default getEntityStatistics
