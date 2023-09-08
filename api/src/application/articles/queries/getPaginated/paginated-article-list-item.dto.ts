export default class PaginatedArticleListItemDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public authorName: string,
    public totalLikes: number
  ) {}
}
