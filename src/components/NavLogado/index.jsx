import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-2 shadow-sm mb-5 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./dist/assets/imagem/Emprega-Embarque.png" alt="Emprega Embarque" style={{ maxWidth: '120px', height: 'auto', marginLeft: '40px', marginTop: '20px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/transmissao">
                Transmissão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vagas">
                Vagas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfilaluno">
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
