import React from "react";
import CodePreview from "../components/CodePreview";
import Navbar from "../components/Navbar";
import { BorderExemple } from "../utils/exemplecode";

export default function Borders() {
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
              <a href="#style">Style</a>
            </li>
            <li>
              <a href="#couleurs">Couleurs</a>
            </li>
            <li>
              <a href="#hover">Hover</a>
            </li>
            <li>
              <a href="#background">Background</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12">
          <h2>Bordures</h2>
          <article className="pl--1">
            <h3>Couleurs</h3>
            <p className="text--gray">Tout les couleurs son disponibles</p>
          </article>
          <article className="pl--1 mt--1">
            <h3>Hauteurs</h3>
            <p className="text--gray">
              La valeur de la hauteur peut allez de 1 à 99
            </p>
            <pre>border--[1 à 99]</pre>
          </article>
          <article className="pl--1 mt--1">
            <h3>Styles</h3>
            <p className="text--gray">
              Voici la listes des styles de bordures disponibles :
            </p>
            <ul className="pl--1">
              <li>- solid</li>
              <li>- none</li>
              <li>- dotted</li>
              <li>- inset</li>
              <li>- dashed</li>
              <li>- groove</li>
              <li>- ridge</li>
              <li>- hidden</li>
              <li>- outset</li>
            </ul>
            <pre className="my--1">border--[styles disponibles]</pre>
            <CodePreview className="mt--1" code={BorderExemple}></CodePreview>
          </article>
        </section>
      </main>
    </>
  );
}
