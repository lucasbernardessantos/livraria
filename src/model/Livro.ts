export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public status: string,
    public id?: string,
  ) {}
}