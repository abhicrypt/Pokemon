import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/TaskA" className="navbar-brand">
            TaskA
          </Link>
          <Link to="/TaskB" className="navbar-brand">
            TaskB
          </Link>
          <Link to="/TaskC" className="navbar-brand">
            TaskC
          </Link>
         
        </nav>
      </div>
    );
  }
}
export default Navbar;
