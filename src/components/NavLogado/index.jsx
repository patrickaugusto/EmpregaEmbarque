import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="/transmissao">
            Transmissão
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/vagas">
            Vagas
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" to="#">
            Perfil
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
