import { Umzug, SequelizeStorage } from 'umzug'
import { db } from '@/infrastructure/persistence/databaseInit'
import { sequelize } from './models'

export const migrator = new Umzug({
	migrations: {
		glob: ['migrations/*.js', { cwd: __dirname }],
	},
	context: db,
	storage: new SequelizeStorage({
		sequelize: db,
    tableName: 'sequelize_migrations',
		timestamps: false
	}),
	logger: console
})

export type Migration = typeof migrator._types.migration
