export class EditarLeitor {
  static template(): string {
    return `
      <div class="modal fade" id="form-editar-leitor" 
        tabindex="-1" aria-labelledby="formLeitores" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Cadastrar Leitor</h1>
            </div>

            <div class="modal-body">    
              <form>
                <div class="mb-3">
                  <label for="input-editar-nome" class="form-label">Nome</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="input-editar-nome" 
                    placeholder="Nome Completo">
                </div>

                <div class="mb-3">
                  <label for="input-editar-email" class="form-label">Email</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="input-editar-email" 
                    placeholder="Email">
                  <label 
                    id="span-email" 
                    class="form-label text-danger invisible"
                  >
                    Email já cadastrado
                  </label>
                </div>

                <div class="mb-3">
                  <label for="input-editar-select-status" class="form-label">Status</label>

                  <select 
                    id="input-editar-select-status" 
                    class="form-select form-select-sm" 
                    aria-label=".form-select-lg example"
                  >
                    <option selected value="Ok">Ok</option>
                    <option value="Inadimplente">Inadimplente</option>
                  </select>
                </div>

                <div class="mb-3 multa">
                  <label for="input-editar-multa invisible" class="form-label">Multa</label>
                  <input
                    type="date"
                    class="form-control"
                    id="input-editar-multa"
                    disabled
                  >
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" id="btn-deletar-leitor" class="btn btn-primary">Deletar</button>
              <button type="button" id="btn-editar-leitor" class="btn btn-primary">Atualizar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}