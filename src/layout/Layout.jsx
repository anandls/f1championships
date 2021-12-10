import React from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.App}>
      <h1>F1 World Champion Standings</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
