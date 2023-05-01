import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { Livro } from '../model/Livro';
import { FireBase } from './../firebase';
export class LivroService {
  
  //private fireBaseConfig
  private biblioteca
  private db
  private livrosRef

  constructor() {
    //this.fireBaseConfig = FireBase.fireBaseConfig
    this.biblioteca = initializeApp(FireBase.fireBaseConfig, 'Projeto-Biblioteca')
    this.db = getFirestore(this.biblioteca)
    this.livrosRef = collection(this.db, 'Livro')
  }

  async pegarTodos(): Promise<Livro[]> {
    let livros: Livro[] = []

    let livroSnap = await getDocs(this.livrosRef)

    livroSnap.forEach((doc) => {
      let livro = new Livro(doc.data().titulo, doc.data().autor, doc.data().status, doc.id)
      livros.push(livro)
    })

    return livros
  }

  async gravar(livro: Livro) {
    await addDoc(collection(this.db, "Livro"), {
      titulo: livro.titulo,
      autor: livro.autor,
      status: livro.status
    })
  }

  buscar() {
    throw new Error('Method not implemented.')
    //let livro = doc(bibliotecaFirestore, 'Livro', 'A5RVrMc5OzJ4hYiQqxnx')
    //let livroSnap = await getDoc(livro)
  }

  async deletar(id: string) {
    await deleteDoc(doc(this.db, 'Livro', id))
  }

  async atualizar(id: string, livro: Livro) {
    let livroRef = doc(this.db, 'Livro', id)
    
    await updateDoc(livroRef, {
      titulo: livro.titulo,
      autor: livro.autor,
      status: livro.status
    })
  }
}