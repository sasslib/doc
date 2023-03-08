import React from "react";
import { Navbar as NavbarSasslib } from "@jokay03j-v2/react-sasslib";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavbarSasslib
        menuBtnChildren={<MdMenu className="h--1 w--1"></MdMenu>}
        navbarTitle="sasslib"
        color="red"
        className="text--white"
      >
        <NavbarSasslib.Item>
          <Link to={"/docs/"} className="text--black md--text--white">
            Accueil
          </Link>
        </NavbarSasslib.Item>
      </NavbarSasslib>
    </>
  );
}
