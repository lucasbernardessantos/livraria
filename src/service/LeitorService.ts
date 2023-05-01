import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { BaseFirebase } from "./firebase";
import { Leitor } from "../model/Leitor";

export class LeitorService extends BaseFirebase {
  
  private leitorRef

  constructor() {
    super()
    this.leitorRef = collection(this.db, 'Leitor')
  }

  async pegarTodos(): Promise<Leitor[]> {
    let leitores: Leitor[] = []

    let leitoresSnap = await getDocs(this.leitorRef)

    leitoresSnap.forEach((doc) => {
      let leitor = new Leitor(doc.data().nome, doc.data().email, doc.data().status, doc.id)
      leitores.push(leitor)
    })

    return leitores
  }

  async buscarPorEmail(email: string): Promise<Leitor[]>{
    let leitores: Leitor[] = []
    let q = query(this.leitorRef, where('email', '==', email))
    let querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      let leitor = new Leitor(doc.data().nome, doc.data().email, doc.data().status, doc.id)
      leitores.push(leitor)
    })

    return leitores
  }

  async cadastrar(leitor: Leitor) {
    let multa

    !leitor.multa ? 
      multa = '' :
      multa = leitor.multa

    await addDoc(this.leitorRef, {
      nome: leitor.nome,
      email: leitor.email,
      status: leitor.status,
      multar: multa
    })
  }

  async deletar(id: string) {
    await deleteDoc(doc(this.db, 'Leitor', id))
  }

  async atualizar(id: string, leitor: Leitor) {
    let leitorRef = doc(this.db, 'Leitor', id)
    let multa

    !leitor.multa ? 
      multa = leitor.multa :
      multa = ''

    await updateDoc(leitorRef, {
      nome: leitor.nome,
      email: leitor.email,
      status: leitor.status,
      multar: multa
    })
  }
}