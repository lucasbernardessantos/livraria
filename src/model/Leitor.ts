import { LeitorStatus } from "../enum/leitorStatus";

export class Leitor {
  constructor(
    public nome: string,
    public email: string,
    public status: LeitorStatus,
    public id?: string,
    public multa?: Date
  ) {}
}