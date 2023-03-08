import React from "react";
import { MdInfo } from "react-icons/md";
import Navbar from "../components/Navbar";

export default function Base() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="d--flex f--direction--column items--center py--1 gap--1">
        <aside className="card w--11-12">
          <h2>Table des matières</h2>
          <ol>
            <li>
              <a href="#displays">Displays</a>
            </li>
            <li>
              <a href="#breakpoints">Breakpoints</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12">
          <h2>Fondations</h2>
          <article className="pl--1">
            <h3 className="" id="displays">
              Displays
            </h3>
            <p className="text--gray">voici la liste des displays possible:</p>
            <ul className="pl--1">
              <li>- flex</li>
              <li>- grid</li>
              <li>- none</li>
              <li>- hidden</li>
              <li>- block</li>
              <li>- inline</li>
              <li>- inline-block</li>
            </ul>
            <p>Pour pouvoir définir un display vous devez faire</p>
            <pre>d--[display possible]</pre>
          </article>
          <article className="pl--1">
            <h3 className="mt--1" id="breakpoints">
              Breakpoints
            </h3>
            <small
              className="w--fit h--1 d--flex items--center border--solid border--blue"
              role={"alert"}
            >
              <span className="w--1 h--full bg--blue d--flex justify--center items--center">
                <MdInfo className="text--white w--auto h--full" />
              </span>
              <p className="px--1 text--xs sm--text--sm">
                Les breakpoints sont utilisable partout
              </p>
            </small>
            <p className="text--gray">
              voici la liste des breakpoints possible:
            </p>
            <ul className="pl--1">
              <li>- xs: 0px</li>
              <li>- sm: 480px</li>
              <li>- md: 720px</li>
              <li>- lg: 960px</li>
              <li>- xl: 1200px</li>
            </ul>
            <p>
              Pour pouvoir définir un propiéter appliquer avec un breakpoint(via
              les medias querys) vous devez faire:
            </p>
            <pre>[breakpoint]--[propriéter]</pre>
          </article>
        </section>
      </main>
    </>
  );
}
