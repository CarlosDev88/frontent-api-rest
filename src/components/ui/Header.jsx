import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Inventarios
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? "active" : ""}`}
                  to="/home"
                >
                  Activos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? "active" : ""}`}
                  to="/usuarios"
                >
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? "active" : ""}`}
                  to="/marcas"
                >
                  Marcas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? "active" : ""}`}
                  to="/tipos"
                >
                  Tipos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? "active" : ""}`}
                  to="/estados"
                >
                  Estados
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
