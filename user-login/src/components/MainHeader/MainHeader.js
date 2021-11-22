import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../context/auth-context";

const MainHeader = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
