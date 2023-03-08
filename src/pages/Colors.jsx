import React from "react";
import CodePreview from "../components/CodePreview";
import Navbar from "../components/Navbar";
import { ColorsExemple } from "../utils/exemplecode";

export default function Colors() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="d--flex f--direction--column items--center gap--2 p--1">
        <aside className="card w--11-12">
          <h2>Table des matières</h2>
          <ol>
            <li>
              <a href="#variations">Variations</a>
              <ol>
                <li>
                  <a href="#blanchir">Blanchir</a>
                </li>
                <li>
                  <a href="#assombrir">Assombrir</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#text">Text</a>
            </li>
            <li>
              <a href="#hover">Hover</a>
            </li>
            <li>
              <a href="#background">Background</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12 pb--2">
          <h2 id="couleurs">Couleurs</h2>
          <p className="text--gray ml--1">
            Voici la liste de toute les couleurs possibles.
          </p>
          <ul className="ml--2 mb--1 w--1-6">
            <li className="text--orange">- orange</li>
            <li className="text--purple">- purple</li>
            <li className="text--black">- black</li>
            <li className="text--primary">- primary</li>
            <li className="text--secondary">- secondary</li>
            <li className="text--info">- info</li>
            <li className="text--error">- error</li>
            <li className="text--blue">- blue</li>
            <li className="text--yellow">- yellow</li>
            <li className="text--green">- green</li>
            <li className="text--gray">- gray</li>
            <li className="text--white bg--black w--fit">- white</li>
          </ul>
          <article className="pl--1">
            <h3 id="variations">Variations</h3>
            <p className="text--gray">
              Blanchir et assombrire une couleur possible
            </p>
            <h4 className="pl--1" id="blanchir">
              Blanchir
            </h4>
            <pre className="pl--1">
              text--[couleur possible]--light--[1 - 9]
            </pre>
            <h4 className="pl--1" id="assombrir">
              Assombrir
            </h4>
            <pre className="pl--1">text--[couleur possible]--dark--[1 - 9]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="text">Text</h3>
            <p className="text--gray">Aappliquer une couleur sur un texte</p>
            <pre>text--[couleur possible]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="hover">Hover</h3>
            <p className="text--gray">Appliquer une couleur lors du hover</p>
            <pre>text--hover--[couleur possible]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="background">Background</h3>
            <p className="text--gray">Appliquer une couleur dans le fond</p>
            <pre>bg--[couleur possible]</pre>
          </article>
          <CodePreview code={ColorsExemple} className="mt--1"></CodePreview>
        </section>
      </main>
    </>
  );
}
