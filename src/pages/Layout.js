import { Outlet, Link } from "react-router-dom";
import '../styles/NavBar.css'

const Layout = () => {
  return (
    <>
      <div className="NavBar">
          <div className="link-container">
            <Link to="/" className="link">Home</Link>
          </div>
          <div  className="link-container">
            <Link to="/ejemplos-inicio" className="link">Básico</Link>
          </div>
          <div  className="link-container">
            <Link to="/ejemplos-useref" className="link">UseRef</Link>
          </div>
          <div  className="link-container">
            <Link to="/ejemplos-usestate" className="link">UseState</Link>
          </div>
          
      </div>
      <script src="./js/app.js" wfd-invisible="true"></script>
      <Outlet />
    </>
  )
};

export default Layout;