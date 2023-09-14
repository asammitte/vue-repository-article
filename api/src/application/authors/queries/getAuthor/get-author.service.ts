import { IAuthorsRepository } from "@/application/interfaces/IAuthorsRepository";
import AuthorDto from "./author.dto";
import NotFoundError from "@/application/exceptions/not-found.error";

export const getAuthor = (authorsRepository: IAuthorsRepository) => async (
  authorId: number
): Promise<AuthorDto | undefined> => {
  const source = await authorsRepository.get(authorId)
  if (source == null) {
    throw new NotFoundError('Author not found')
  }

  return new AuthorDto(
    source.id, source.firstName, source.lastName, source.rating, source.totalArticles
  )
}

export default getAuthor
