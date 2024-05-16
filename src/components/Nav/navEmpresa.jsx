import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-2 shadow-sm p-3 rounded sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./dist/assets/imagem/logoEmpresa.png" alt="Emprega Embarque" style={{ width: '120px', height: 'auto', marginLeft: '40px', marginTop: '20px' }} />
          </Link>

          <div className="dropdown ml-auto">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Entrar
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <Link className="dropdown-item" to="/loginaluno">
                Sou Aluno
              </Link>
              <Link className="dropdown-item" to="/loginempresa">
                Sou Empresa
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
