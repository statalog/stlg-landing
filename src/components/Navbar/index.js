import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { useAuth } from "./../../util/auth.js";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="https://statalog.org">
              <img className="image" src={props.logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
