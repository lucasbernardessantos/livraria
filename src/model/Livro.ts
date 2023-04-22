import { LivroStatus } from "../enum/livroStatus"

export class Livro {
  constructor(
    public id: string,
    public titulo: string,
    public autor: string,
    public status: LivroStatus
  ) {}
}