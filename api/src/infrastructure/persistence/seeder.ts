import { Umzug, SequelizeStorage } from 'umzug'
import { db } from '@/infrastructure/persistence/databaseInit'

export const migrator = new Umzug({
	migrations: {
		glob: ['migrations/*.ts', { cwd: __dirname }],
	},
	context: db,
	storage: new SequelizeStorage({
		sequelize: db,
    // tableName: 'sequelize_migrations',
		timestamps: true
	}),
	logger: console
})
