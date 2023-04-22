import { EmprestimoStatus } from '../enum/emprestimoStatus'
import { Leitor } from './Leitor'
import { Livro } from './Livro'

export class Emprestimo {
  constructor(
    public id: string,
    public leitor: Leitor,
    public livro: Livro,
    public retirada: Date,
    public devolucao: Date,
    public status: EmprestimoStatus
  ) {}
}