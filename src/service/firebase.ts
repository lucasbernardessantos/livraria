import { initializeApp } from "firebase/app"
import { FireBase } from "../firebase"
import { getFirestore } from "firebase/firestore"

export class BaseFirebase {
  protected biblioteca
  protected db

  constructor() {
    this.biblioteca = initializeApp(FireBase.fireBaseConfig, 'Projeto-Biblioteca')
    this.db = getFirestore(this.biblioteca)
  }
}