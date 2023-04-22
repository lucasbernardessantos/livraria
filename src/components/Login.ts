export class Login {
  
  template(): string {
    return `
      <form>
        <div class="m-3">
          <label for="input-email" class="form-label">E-mail:</label>
          <input type="email" class="form-control" id="input-email"></input>
        </div>

        <div class="m-3">
          <label for="input-password" class="form-label">Passoword</label>
          <input type="password" class="form-control" id="input-password"></input>
        </div>

        <button type="submit" class="btn btn-primary mx-3">Submit</button>
      </form>
    `
  }
  
}