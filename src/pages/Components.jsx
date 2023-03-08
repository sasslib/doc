import React from "react";
import CodePreview from "../components/CodePreview";
import Navbar from "../components/Navbar";
import {
  ButtonExemple,
  CardExemple,
  GridSystemExemple,
  NavbarCodeExemple,
} from "../utils/exemplecode";

export default function Components() {
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
              <a href="#navbar">Navbar</a>
            </li>
            <li>
              <a href="#buttons">Buttons</a>
            </li>
            <li>
              <a href="#card">Card</a>
            </li>
            <li>
              <a href="#grid-system">Grid System</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12 pb--2">
          <h2 id="couleurs">Composents</h2>
          <article className="pl--1">
            <h3 id="variations">Navbar</h3>
            <p className="text--gray">
              Vous pouvez mettre toute les couleurs disponible comme fond.
            </p>
            <code>navbar--[couleurs possibles]</code>
            <CodePreview
              code={NavbarCodeExemple}
              className="mt--1"
            ></CodePreview>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="buttons">Buttons</h3>
            <p class="mb--1 text--gray">
              Vous pouvez utiliser toute les couleurs disponible sur les boutons
            </p>
            <CodePreview code={ButtonExemple}></CodePreview>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="card">Card</h3>
            <p>
              card title | <code>card--title</code>
            </p>
            <p>
              card body | <code>card--body</code>
            </p>
            <CodePreview code={CardExemple} className="mt--1"></CodePreview>
          </article>
          <article className="pl--1 mt--1">
            <h3 id="grid-system">Grid System</h3>
            <p className="text--gray">
              Pour chaque item vous pouvez utiliser col--[1 à 12]--[breakpoint]
            </p>
          </article>
          <CodePreview code={GridSystemExemple} className="mt--1"></CodePreview>
        </section>
      </main>
    </>
  );
}
