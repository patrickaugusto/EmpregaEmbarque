import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <form>
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                checked
              />
              <label class="form-check-label" for="form2Example34">
                {" "}
                Lembrar Usuario{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Esqueceu a senha?</a>
          </div>
        </div>

        <Link to="/inicio">
          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-primary btn-block mb-4"
          >
            Entrar
          </button>
        </Link>


        <div class="text-center">
          <p>
            Ainda não possui uma conta? <a href="#!">Registre-se!</a>
          </p>
        </div>
      </form>
    </>
  );
}
