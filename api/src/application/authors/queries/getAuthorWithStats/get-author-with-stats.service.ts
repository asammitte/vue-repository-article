import { IAuthorsRepository } from "@/application/interfaces/IAuthorsRepository"
import AuthorDetailsDto from "@/application/authors/queries/getAuthorWithStats/author-details.dto"
import NotFoundError from "@/application/exceptions/not-found.error"

export const getAuthorWithStats = (authorsRepository: IAuthorsRepository) => async (
  authorId: number
): Promise<AuthorDetailsDto> => {
  const source = await authorsRepository.getWithStats(authorId)
  if (source == null) {
    throw new NotFoundError('Author not found')
  }

  return new AuthorDetailsDto(
    source.id, source.firstName, source.lastName, source.rating, source.totalArticles
  )
}

export default getAuthorWithStats
