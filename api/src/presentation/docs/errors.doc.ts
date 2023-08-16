export const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Smth went wrong =)',
          },
        },
      },
    },
  },
}

export const badRequestError = {
  description: 'Bad Request Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          value: {
            type: 'object',
            properties: {
              query: {
                type: "object",
              },
              body: {
                type: "object",
              },
              params: {
                type: "object",
              },
            }
          },
          errors: {
            type: 'array',
            items: {
              type: 'string'
            },
          },
          inner: {
            type: 'array',
            items: {
              type: "object",
              properties: {
                value: {
                  type: 'string',
                },
                path: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                errors: {
                  type: 'string[]',
                },
                params: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'string',
                    },
                    originalValue: {
                      type: 'string',
                    },
                    path: {
                      type: 'string',
                    },
                    spec: {
                      type: "object",
                      properties: {
                        strip: {
                          type: 'boolean',
                        },
                        strict: {
                          type: 'boolean',
                        },
                        abortEarly: {
                          type: 'boolean',
                        },
                        recursive: {
                          type: 'boolean',
                        },
                        nullable: {
                          type: 'boolean',
                        },
                        optional: {
                          type: 'boolean',
                        },
                        coerce: {
                          type: 'boolean',
                        },
                      },
                    },
                    values: {
                      type: 'string',
                    },
                    resolved: {
                      type: 'array',
                      items: {
                        type: 'string'
                      },
                    }
                  }
                },
                inner: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                },
                name: {
                  type: 'string',
                },
                message: {
                  type: 'string',
                }
              }
            }
          },
          name: {
            type: 'string',
          },
          message: {
            type: 'string',
          }
        },
        example: {
          "value": {
            "query": {
              "orderDirection": "asdc",
              "sortfield": "ratinsg",
              "pageNumber": 10,
              "pageIndex": 1
            },
            "body": {},
            "params": {}
          },
          "errors": [
            "query.sortfield must be one of the following values: id, name, rating",
            "query.orderDirection must be one of the following values: asc, desc"
          ],
          "inner": [
            {
              "value": "ratinsg",
              "path": "query.sortfield",
              "type": "oneOf",
              "errors": [
                "query.sortfield must be one of the following values: id, name, rating"
              ],
              "params": {
                "value": "ratinsg",
                "originalValue": "ratinsg",
                "path": "query.sortfield",
                "spec": {
                  "strip": false,
                  "strict": false,
                  "abortEarly": true,
                  "recursive": true,
                  "nullable": false,
                  "optional": true,
                  "coerce": true
                },
                "values": "id, name, rating",
                "resolved": [
                  "id",
                  "name",
                  "rating"
                ]
              },
              "inner": [],
              "name": "ValidationError",
              "message": "query.sortfield must be one of the following values: id, name, rating"
            },
            {
              "value": "asdc",
              "path": "query.orderDirection",
              "type": "oneOf",
              "errors": [
                "query.orderDirection must be one of the following values: asc, desc"
              ],
              "params": {
                "value": "asdc",
                "originalValue": "asdc",
                "path": "query.orderDirection",
                "spec": {
                  "strip": false,
                  "strict": false,
                  "abortEarly": true,
                  "recursive": true,
                  "nullable": false,
                  "optional": true,
                  "coerce": true
                },
                "values": "asc, desc",
                "resolved": [
                  "asc",
                  "desc"
                ]
              },
              "inner": [],
              "name": "ValidationError",
              "message": "query.orderDirection must be one of the following values: asc, desc"
            }
          ],
          "name": "ValidationError",
          "message": "2 errors occurred"
        }
      },
    },
  },
}
