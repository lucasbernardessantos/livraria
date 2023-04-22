import { Login } from "./components/Login"
import { Livros } from "./components/Livros"
import { Emprestimos } from "./components/Emprestimos"
import { LeitorController } from "./controller/Leitor/LeitorController"

const btnNavbar = document.getElementById('btn-navbar') as HTMLButtonElement
const divNavBar = document.getElementById('navbarText') as HTMLDivElement

const btnLogin = document.getElementById('btn-login') as HTMLButtonElement
const btnLeitores = document.getElementById('btn-leitores') as HTMLButtonElement
const btnLivros = document.getElementById('btn-livros') as HTMLButtonElement
const btnEmprestismos = document.getElementById('btn-emprestimos') as HTMLButtonElement
const btnLogout = document.getElementById('btn-logout') as HTMLButtonElement

const divContent = document.getElementById('div-content') as HTMLDivElement

btnLogin.addEventListener('click', (ev: MouseEvent) => {
  closeNavBar()

  let login = new Login()

  divContent.innerHTML = login.template()
})

btnLeitores.addEventListener('click', (ev: MouseEvent) => {
  closeNavBar()

  let leitorController = new LeitorController()

  divContent.innerHTML = leitorController.getView()
})

btnLivros.addEventListener('click', (ev: MouseEvent) => {
  closeNavBar()

  let livros = new Livros()

  divContent.innerHTML = livros.template()
})

btnEmprestismos.addEventListener('click', (ev: MouseEvent) => {
  closeNavBar()

  let emprestrimos = new Emprestimos()

  divContent.innerHTML = emprestrimos.template()
})

btnLogout.addEventListener('click', (ev: MouseEvent) => {
  closeNavBar()

  divContent.innerHTML = `<p>Logout</p>`
})

function closeNavBar() {
  btnNavbar.classList.toggle('collapsed')
  divNavBar.classList.toggle('show')
  divNavBar.classList.toggle('collapsing')

  btnNavbar.ariaExpanded?.includes('true') ?
    btnNavbar.ariaExpanded = 'false' :
    btnNavbar.ariaExpanded = 'true'
}