import React from "react";
import Navbar from "../components/Navbar";

export default function Flexbox() {
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
              <a href="#direction">Flex direction</a>
            </li>
            <li>
              <a href="#align-items">Align items</a>
            </li>
            <li>
              <a href="#justify-content">Justify content</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12">
          <h2>Flexbox</h2>
          <article className="pl--1">
            <h3 className="" id="direction">
              Flex direction
            </h3>
            <p className="text--gray">voici la liste des direction possible:</p>
            <ul className="pl--1">
              <li>- column</li>
              <li>- column-reverse</li>
              <li>- row</li>
              <li>- row-reverse</li>
            </ul>
            <p>Pour pouvoir définir une direction devez faire</p>
            <pre>f--direction--[direction possible]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3 className="" id="align-items">
              Align items
            </h3>
            <p className="text--gray">
              voici la liste des alignements possible:
            </p>
            <ul className="pl--1">
              <li>- center</li>
              <li>- start</li>
              <li>- end</li>
              <li>- baseline</li>
              <li>- normal</li>
            </ul>
            <p>Pour pouvoir définir un alignement devez faire</p>
            <pre>items--[alignements possible]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3 className="" id="justify-content">
              Justify content
            </h3>
            <p className="text--gray">
              voici la liste des alignements possible:
            </p>
            <ul className="pl--1">
              <li>- flex-start</li>
              <li>- flex-end</li>
              <li>- center</li>
              <li>- space-between</li>
              <li>- space-around</li>
            </ul>
            <p>Pour pouvoir définir un alignement devez faire</p>
            <pre>justify--[alignements possible]</pre>
          </article>
        </section>
      </main>
    </>
  );
}
