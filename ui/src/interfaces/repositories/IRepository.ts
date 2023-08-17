interface IRepository {
  call: <T>(method: HttpMethod, url: string, query?: any, payload?: any) => Promise<T>
}

export { type IRepository }
