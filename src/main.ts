import { Login } from './components/Login';
import { EmprestimoController } from './controller/EmprestimoController';
import { LeitorController } from './controller/LeitorController';
import { LivroController } from './controller/LivroController';

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

btnLeitores.addEventListener('click', async (ev: MouseEvent) => {
  closeNavBar()

  let leitorController = new LeitorController()

  divContent.innerHTML = await leitorController.getView()
  leitorController.adicionarEventos()
})

btnLivros.addEventListener('click', async (ev: MouseEvent) => {
  closeNavBar()

  let livroController = new LivroController()

  divContent.innerHTML = await livroController.getView()
  livroController.adicionarEventos()
})

btnEmprestismos.addEventListener('click', async (ev: MouseEvent) => {
  closeNavBar()

  let emprestrimosController = new EmprestimoController()

  divContent.innerHTML = await emprestrimosController.getView()
  emprestrimosController.adicionarEventos()
  await emprestrimosController.adicionarLeitorAoComponente()
  await emprestrimosController.adicionarLivroAoComponente()
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