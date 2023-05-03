import { DocumentData, QueryDocumentSnapshot, addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { EmprestimoStatus } from "../enum/emprestimoStatus"
import { LeitorStatus } from "../enum/leitorStatus"
import { LivroStatus } from '../enum/livroStatus'
import { Livro } from '../model/Livro'
import { Emprestimo } from './../model/Emprestimo'
import { Leitor } from './../model/Leitor'
import { LivroService } from "./LivroService"
import { BaseFirebase } from "./firebase"

export class EmprestimosService extends BaseFirebase {

  private livroService: LivroService

  private emprestimoRef

  constructor() {
    super()
    this.livroService = new LivroService()
    this.emprestimoRef = collection(this.db, 'Emprestimo')
  }

  async cadastrar(emprestimo: Emprestimo) {
    emprestimo.livro.status = LivroStatus.indisponivel

    await this.livroService.atualizar(emprestimo.livro.id!, emprestimo.livro)

    return await addDoc(collection(this.db, 'Emprestimo'), {
      leitor: {
        id: emprestimo.leitor.id,
        nome: emprestimo.leitor.nome,
        email: emprestimo.leitor.email,
        status: emprestimo.leitor.status
      },
      livro: {
        id: emprestimo.livro.id,
        titulo: emprestimo.livro.titulo,
        autor: emprestimo.livro.autor,
        status: emprestimo.livro.status
      },
      retirada: emprestimo.retirada.toString(),
      devolucao: emprestimo.devolucao.toString(),
      status: emprestimo.status
    })
  }

  async obterTodos(): Promise<Emprestimo[]> {
    let emprestimos: Emprestimo[] = []

    let emprestimosSnap = await getDocs(this.emprestimoRef)

    emprestimosSnap.forEach((doc) => {
      let leitor = this.retirarLeitor(doc)
      let livro = this.retirarLivro(doc)
      let retirada = this.retirarRetirada(doc)
      let devolucao = this.retirarDevolucao(doc)
      let status = this.retirarStatus(doc)

      emprestimos.push(new Emprestimo(leitor, livro, retirada, devolucao, status, doc.id))
    })

    return emprestimos
  }

  async fechar(emprestimo: Emprestimo) {
    let emprestimoRef = doc(this.db, 'Emprestimo', emprestimo.id!)
    emprestimo.livro.status = LivroStatus.disponivel

    await this.livroService.atualizar(emprestimo.livro.id!, emprestimo.livro)

    await updateDoc(emprestimoRef, {
      status: EmprestimoStatus.fechado
    })
    
    console.log(emprestimo)
  }

  retirarLeitor(doc: QueryDocumentSnapshot<DocumentData>): Leitor {
    let id: string = doc.data().leitor.id
    let nome: string = doc.data().leitor.nome
    let email: string = doc.data().leitor.email
    let status: LeitorStatus = doc.data().leitor.status

    return new Leitor(nome, email, status, id)
  }

  retirarLivro(doc: QueryDocumentSnapshot<DocumentData>): Livro {
    let id: string = doc.data().livro.id
    let titulo: string = doc.data().livro.titulo
    let autor: string = doc.data().livro.autor
    let status: LivroStatus = doc.data().livro.status

    return new Livro(titulo, autor, status, id)
  }

  retirarRetirada(doc: QueryDocumentSnapshot<DocumentData>): Date {
    let data: string = doc.data().retirada

    return new Date(data)
  }

  retirarDevolucao(doc: QueryDocumentSnapshot<DocumentData>): Date {
    let data: string = doc.data().devolucao

    return new Date(data)
  }

  retirarStatus(doc: QueryDocumentSnapshot<DocumentData>): EmprestimoStatus {
    let status: EmprestimoStatus = doc.data().status

    return status
  }
}