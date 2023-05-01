export class CadastrarLeitor {
  static template(): string {
    return `
      <div class="modal fade" id="form-cadastrar-leitor" 
        tabindex="-1" aria-labelledby="formLeitores" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Cadastrar Leitor</h1>
            </div>

            <div class="modal-body">    
              <form>
                <div class="mb-3">
                  <label for="input-cadastrar-nome" class="form-label">Nome</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="input-cadastrar-nome" 
                    placeholder="Nome Completo">
                </div>

                <div class="mb-3">
                  <label for="input-cadastrar-email" class="form-label">Email</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="input-cadastrar-email" 
                    placeholder="Email">
                  <label 
                    id="span-email" 
                    class="form-label text-danger invisible">
                      Email já cadastrado
                  </label>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" id="btn-cadastrar-leitor" class="btn btn-primary">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}