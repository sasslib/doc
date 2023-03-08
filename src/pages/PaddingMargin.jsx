import React from "react";
import Navbar from "../components/Navbar";

export default function PaddingMargin() {
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
              <a href="#padding">Padding</a>
              <ol>
                <li>
                  <a href="#padding-left">Padding left</a>
                </li>
                <li>
                  <a href="#padding-right">Padding right</a>
                </li>
                <li>
                  <a href="#padding-x">Padding x</a>
                </li>
                <li>
                  <a href="#padding-top">Padding top</a>
                </li>
                <li>
                  <a href="#padding-bottom">Padding bottom</a>
                </li>
                <li>
                  <a href="#padding-y">Padding y</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#margin">Margin</a>
              <ol>
                <li>
                  <a href="#margin-left">Margin left</a>
                </li>
                <li>
                  <a href="#margin-right">Margin right</a>
                </li>
                <li>
                  <a href="#margin-x">Margin x</a>
                </li>
                <li>
                  <a href="#margin-top">Margin top</a>
                </li>
                <li>
                  <a href="#margin-bottom">Margin bottom</a>
                </li>
                <li>
                  <a href="#margin-y">Margin y</a>
                </li>
              </ol>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12 pb--2">
          <article>
            <h2>Padding</h2>
            <article className="pl--1">
              <h4 id="padding">padding</h4>
              <p className="text--gray">le padding part de 1 à 99.</p>
              <pre className="">p--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-left">padding left</h4>
              <p className="text--gray">
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>pl--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-right">padding right</h4>
              <p className="text--gray">
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>pr--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-x">padding x</h4>
              <p className="text--gray">
                Padding y est la combinaison de padding right & padding left.
                <br />
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>px--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-top">padding top</h4>
              <p className="text--gray">
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>pt--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-bottom">padding bottom</h4>
              <p className="text--gray">
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>pb--[1 - 99]</pre>
            </article>
            <article className="pl--1 mt--1">
              <h4 id="padding-y">padding y</h4>
              <p className="text--gray">
                Padding y est la combinaison de padding right & padding left.
                <br />
                La valeur du padding peut allez de 1 à 99.
              </p>
              <pre>py--[1 - 99]</pre>
            </article>
          </article>
          <article>
            <h2 className="mt--1">Margin</h2>
            <section className="ml--1">
              <h3 id="margin">margin</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <pre>m--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-y">margin y</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <p className="text--gray">
                Margin y est la combinaison de margin top et margin bottom
              </p>
              <pre>my--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-top">margin top</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <pre>mt--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-bottom">margin bottom</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <pre>mb--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-x">margin x</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <p className="text--gray">
                Margin x est la combinaison de margin left et margin right
              </p>
              <pre>mx--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-left">margin left</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <pre>ml--[1 - 99]</pre>
            </section>
            <section className="ml--1 mt--1">
              <h3 id="margin-right">margin right</h3>
              <p className="text--gray">
                La valeur de height peut allez de 1 à 99.
              </p>
              <pre>mr--[1 - 99]</pre>
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
