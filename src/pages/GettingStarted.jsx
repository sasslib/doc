import React from "react";
import ReactHighlight from "react-highlight";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import "highlight.js/styles/default.css";
import Button from "../components/Button";
export default function GettingStarted() {
  return (
    <>
      <Navbar
        title={"Shinobi CSS doc"}
        items={[
          { title: "Home", href: `${import.meta.env.VITE_PUBLIC_BASE_URL}/` },
          {
            title: "Getting Started",
            href: `${import.meta.env.VITE_PUBLIC_BASE_URL}/getting-started`,
          },
          {
            title: "Components",
            href: `${import.meta.env.VITE_PUBLIC_BASE_URL}/components`,
          },
        ]}
      />
      <Section title={"Getting Started"}>
        <Section
          title={"Instalation"}
          titleAs={"h2"}
          titleClassName="text--sm"
          className="border--none pl--1"
        >
          <div className="d--flex w--6-6 my--1">
            <ReactHighlight className="language-bash rounded--sm w--5">
              npm install shinobie
            </ReactHighlight>
            <Button
              onClick={() =>
                navigator.clipboard.writeText("npm install shinobie")
              }
              className="btn--red text--white ml--1"
            >
              copier
            </Button>
          </div>
        </Section>
        <Section
          title={"Importation"}
          titleAs={"h2"}
          titleClassName="text--sm"
          className="border--none pl--1"
        >
          <ReactHighlight className="language-javascript rounded--sm">
            import "shinobie"; //import all shinobie styles
            <br />
            // or use cdn
            <br />
            import "https://cdn.jsdelivr.net/npm/shinobie/build/style.min.css";
            // import shinobie with cdn
          </ReactHighlight>
        </Section>
      </Section>
    </>
  );
}
