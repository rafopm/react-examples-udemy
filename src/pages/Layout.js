import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-start">
          <div className="link-container">
            <Link to="/" className="btn btn-outline-success me-2">
              Home
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/ejemplos-inicio"
              className="btn btn-outline-secondary me-2"
            >
              Básico
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/ejemplos-useref"
              className="btn btn-outline-secondary me-2"
            >
              UseRef
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/ejemplos-usestate"
              className="btn btn-outline-secondary me-2"
            >
              UseState
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/ejemplos-fetch"
              className="btn btn-outline-secondary me-2"
            >
              Fetch
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/ejemplos-axios"
              className="btn btn-outline-secondary me-2"
            >
              Axios
            </Link>
          </div>
        </div>
      </div>
      <script src="./js/app.js" wfd-invisible="true"></script>
      <Outlet />
    </>
  );
};

export default Layout;
