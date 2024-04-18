import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" to="/login">
            Entrar
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
