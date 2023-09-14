import { IEntityStatistics, IStatisticsRepository } from '@/application/interfaces/IStatisticsRepository'
import { QueryTypes } from "sequelize"
import BaseRepository from '@/infrastructure/persistence/repositories/base.repository'
import StatisticTypeEnum from '@/domain/enums/statistic-type.enum'

export default class StatisticsRepository extends BaseRepository implements IStatisticsRepository {
  public get = async (parentType: StatisticTypeEnum, parentId: number): Promise<IEntityStatistics | null> => {
    const response = await this.db.query<IEntityStatistics>(`\
      SELECT likes AS rating FROM statistics WHERE parent_type = :parentType AND parent_id = :parentId
    `, { 
      type: QueryTypes.SELECT,
      raw: true,
      plain: true,
      replacements: {
        parentId: parentId,
        parentType: parentType
      }
    })

    if (response?.rating == null) {
      return null
    }

    return response
  }
}
