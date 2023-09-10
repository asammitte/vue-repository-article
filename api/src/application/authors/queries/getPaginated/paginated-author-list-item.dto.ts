export default class PaginatedAuthorListItemDto {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public rating: number,
    public totalArticles: number
  ) {}
}
