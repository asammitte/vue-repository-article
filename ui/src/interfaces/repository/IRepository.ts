interface IRepository {
  call: <T>(method: Method, url: string, query?: any, payload?: any) => Promise<T>
}

export { type IRepository }
