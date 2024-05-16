function Footer() {
  return (
    <footer class="footer">

      <div class="bg-light text-light py-3 py-md-5 py-xl-8 border-top border-light-subtle">
        <div class="container overflow-hidden p-0">
          <div class="row gy-3 gy-md-5 gy-xl-0 justify-content-center m-0">
            <div class="col-xs-12 col-xl-6 order-2 order-xl-1">
              <ul class="nav justify-content-center m-0">
                <li class="">
                  <a class="nav-link text-dark px-2 px-md-3" href="#!">Integrantes</a>
                </li>
                <li class="">
                  <a class="nav-link text-dark px-2 px-md-3" href="#!">Termos</a>
                </li>
                <li class="">
                  <a class="nav-link text-dark px-2 px-md-3" href="#!">Privacidade</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light text-dark py-3 py-md-5 p-0">
        <div class="container overflow-hidden">
          <div class="row m-0">
            <div class="col m-0">
              <div class="footer-copyright-wrapper text-center">
                &copy; 2024. Todos os Direitos Reservados.
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;