import 'dotenv/config'
import { getPaginatedArticles } from '@/presentation/modules/articles/docs/get-paginated-articles.doc'

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
      name: 'Articles',
    },
  ],
  paths: {
    '/articles': {
      get: getPaginatedArticles,
    },
  },
}

export { apiDocumentation }
