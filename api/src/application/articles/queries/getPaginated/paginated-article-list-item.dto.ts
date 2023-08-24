export default class PaginatedArticleListItemDto {
  public id: number
  public title: string
  public content: string
  public authorName: string
  public totalLikes: number

  constructor(
    id: number,
    title: string,
    content: string,
    authorName: string,
    totalLikes: number
  ) {
    this.id = id
    this.title = title
    this.content = content
    this.authorName = authorName
    this.totalLikes = totalLikes
  }
}
