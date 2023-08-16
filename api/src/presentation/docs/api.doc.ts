import 'dotenv/config'
import { getPaginatedSellers } from '@/presentation/modules/sellers/docs/get-paginated-sellers.doc'

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Marketplace REST API - Documentation',
    description: 'List of Marketplace endpoints.',
    termsOfService: '',
    contact: {
      name: 'Kostiantyn Pavlichenko',
      email: 'pavli4enko30@gmail.com',
      url: '',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/`,
      description: 'Local Server',
    },
  ],
  tags: [
    {
      name: 'Sellers',
    },
  ],
  paths: {
    '/sellers': {
      get: getPaginatedSellers,
    },
  },
}

export { apiDocumentation }
