import { Button } from "@jokay03j-v2/react-sasslib";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactHighlight from "react-highlight";
import "highlight.js/styles/default.css";
import Navbar from "../components/Navbar";

export default function Home() {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w--full h--full d--flex items--center f--direction--column gap--2 py--1">
        <aside className="card w--11-12">
          <h2>Table des matières</h2>
          <ol>
            <li>
              <a href="#getting-started">Bien commencé</a>
            </li>
            <li>
              <a href="#topics">topics</a>
            </li>
          </ol>
        </aside>
        <section className="card w--11-12">
          <h2 id="getting-started">Bien commencé</h2>
          <section className="pl--1">
            <h3 className="mt--1">Installation</h3>
            <div className="d--flex w--full gap--2">
              <ReactHighlight className="language-bash rounded--sm w--6-6">
                npm install @jokay03j-v2/sasslib
              </ReactHighlight>
              <Button
                onClick={() =>
                  navigator.clipboard
                    .writeText("npm install @jokay03j-v2/sasslib")
                    .then(() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 1000);
                    })
                }
                className="text--white ml--2"
                color={copied ? "secondary" : "red"}
              >
                {copied ? "copié !" : "copier"}
              </Button>
            </div>
          </section>
          <section className="pl--1">
            <h3 className="my--1" id="topics">
              Topics
            </h3>
            <div
              className="d--flex f--direction--column md--f--direction--row gap--2 w--full"
              style={{ flexWrap: "wrap" }}
            >
              <Link
                to="/docs/references/base"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Fondations</h3>
                  <p className="card--body">
                    Tout savoir sur les fondations de sasslib.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/colors"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Couleurs</h3>
                  <p className="card--body">
                    Tout savoir sur les couleurs disponibles.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/flexbox"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Flexbox</h3>
                  <p className="card--body">
                    Tout savoir sur le support de flexbox dans sasslib.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/padding&margin"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Padding & Margin</h3>
                  <p className="card--body">
                    Tout savoir sur comment utiliser le padding & le margin.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/height&width"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Height & Width</h3>
                  <p className="card--body">
                    Tout savoir sur comment utiliser la largeur et la longueur.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/components"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Components</h3>
                  <p className="card--body">
                    Tout savoir sur les composents dans sasslib.
                  </p>
                </div>
              </Link>
              <Link
                to="/docs/references/borders"
                style={{ textDecoration: "none" }}
                className="col--5--xs col--5--sm col--5--xl"
              >
                <div className="card h--fit min--h--4">
                  <h3 className="card--title">Bordures</h3>
                  <p className="card--body">
                    Tout savoir sur l'utilisation des bordures.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
