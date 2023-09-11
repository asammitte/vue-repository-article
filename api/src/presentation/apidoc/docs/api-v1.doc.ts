import 'dotenv/config'
import { getPaginatedArticles } from '@/presentation/modules/articles/docs/get-paginated-articles.doc'
import { getPaginatedAuthors } from '@/presentation/modules/authors/docs/get-paginated-authors.doc'

const apiDocumentationV1 = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Articles REST API - Documentation',
    description: 'List of Articles app endpoints.',
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
      url: `http://localhost:${process.env.PORT}/v1/`,
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
    '/authors': {
      get: getPaginatedAuthors,
    },
  },
}

export { apiDocumentationV1 }
