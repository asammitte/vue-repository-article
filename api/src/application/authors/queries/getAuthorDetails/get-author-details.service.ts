import { IAuthorsRepository } from "@/application/interfaces/IAuthorsRepository"
import AuthorDetailsDto from "@/application/authors/queries/getAuthorDetails/author-details.dto"
import NotFoundError from "@/application/exceptions/not-found.error"

export const getAuthorDetails = (authorsRepository: IAuthorsRepository) => async (
  authorId: number
): Promise<AuthorDetailsDto> => {
  const source = await authorsRepository.get(authorId)
  if (source == null) {
    throw new NotFoundError('Author not found')
  }

  return new AuthorDetailsDto(
    source.id, source.firstName, source.lastName, source.rating, source.totalArticles
  )
}

export default getAuthorDetails
