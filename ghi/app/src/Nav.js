import { NavLink } from "react-router-dom";
import logo from './logo.png';

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light" 
      style={{backgroundColor: 'rgb(238, 233, 232', paddingBottom:'15px', fontSize:'18px'}}>
      <div className="container-fluid">
      <NavLink className="nav-link" aria-current="page" to="/">
          <img src={logo} style={{ height:'60px'}}></img>
      </NavLink>
        <button className="navbar-toggler" 
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/attendees/new">
                  Attend conference
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/locations/new">
                  Add location
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/conferences/new">
                  Add conference
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/presentations/new">
                  Add presentation
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
  
export default Nav;