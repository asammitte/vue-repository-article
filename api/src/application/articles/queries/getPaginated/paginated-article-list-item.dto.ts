export default class PaginatedArticleListItemDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public totalLikes: number,
    public authorId: number,
    public authorName: string
  ) {}
}
