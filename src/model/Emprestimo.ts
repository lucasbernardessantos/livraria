import { EmprestimoStatus } from '../enum/emprestimoStatus'
import { Leitor } from './Leitor'
import { Livro } from './Livro'

export class Emprestimo {
  constructor(
    public leitor: Leitor,
    public livro: Livro,
    public retirada: Date,
    public devolucao: Date,
    public status: EmprestimoStatus,
    public id?: string,
  ) {}
}