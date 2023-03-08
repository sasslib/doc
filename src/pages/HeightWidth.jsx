import React from "react";
import Navbar from "../components/Navbar";

export default function HeightWidth() {
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
              <a href="#">Height</a>
              <ol>
                <li>
                  <a href="#height-fixer">Fixer</a>
                  <ol>
                    <li>
                      <a href="#height">height</a>
                    </li>
                    <li>
                      <a href="#min-height">min height</a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#height-relative">Relative</a>
                  <ol>
                    <li>
                      <a href="#height-viewport-6">6</a>
                    </li>
                    <li>
                      <a href="#height-viewport-12">12</a>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">Width</a>
              <ol>
                <li>
                  <a href="#width-fixer">Fixer</a>
                  <ol>
                    <li>
                      <a href="#width">width</a>
                    </li>
                    <li>
                      <a href="#min-width">min width</a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#width-fixer">Relative</a>
                  <ol>
                    <li>
                      <a href="#width-viewport-6">6</a>
                    </li>
                    <li>
                      <a href="#width-viewport-12">12</a>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12 pb--2">
          <article>
            <h2 id="#">Height</h2>
            <article className="pl--1">
              <h3 id="height-fixer">Fixer</h3>
              <article className="pl--1">
                <h4 className="height">height</h4>
                <p className="text--gray">
                  La valeur de height peut allez de 1 à 99.
                </p>
                <pre className="">h--[1 - 99]</pre>
              </article>
              <article className="pl--1 mt--1">
                <h4 id="min-height">min height</h4>
                <p className="text--gray">
                  La valeur de min-height peut allez de 1 à 99.
                </p>
                <pre className="">min--h--[1 - 99]</pre>
              </article>
            </article>
            <article className="pl--1 mt--1">
              <h3 id="height-relative">Relative</h3>
              <article className="pl--1">
                <h4 id="height-viewport-6">6</h4>
                <p className="text--gray">La fenêtre 6 part de 1 à 6</p>
                <pre className="">h--1-6</pre>
              </article>
              <article className="pl--1 mt--1">
                <h4 id="height-viewport-12">12</h4>
                <p className="text--gray">La fenêtre 12 part de 1 à 12</p>
                <pre className="">h--7-12</pre>
              </article>
            </article>
          </article>
          <article>
            <h2 className="mt--1">Width</h2>
            <article className="pl--1">
              <h3 id="width-fixer">Fixer</h3>
              <article className="pl--1">
                <h4 className="">width</h4>
                <p className="text--gray">
                  La valeur de width peut allez de 1 à 99.
                </p>
                <pre className="">w--[1 - 99]</pre>
              </article>
              <article className="pl--1 mt--1">
                <h4 className="min-width">min width</h4>
                <p className="text--gray">
                  La valeur de min-width peut allez de 1 à 99.
                </p>
                <pre className="">min--w--[1 - 99]</pre>
              </article>
            </article>
            <article className="pl--1 mt--1">
              <h3>Relative</h3>
              <article className="pl--1">
                <h4 id="width-viewport-6">6</h4>
                <p className="text--gray">La fenêtre 6 part de 1 à 6</p>
                <pre className="">w--1-6</pre>
              </article>
              <article className="pl--1 mt--1">
                <h4 id="width-viewport-12">12</h4>
                <p className="text--gray">La fenêtre 12 part de 1 à 12</p>
                <pre className="">w--7-12</pre>
              </article>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}
