import React from "react";
import CodeSandBoxPreview from "../components/CodeSandboxPreview";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Components() {
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
      <div className="py--1 px--1">
        <Section title={"Components"}>
          <Section
            title={"Navbar"}
            titleAs={"h2"}
            className="border--none pl--1"
          >
            <p className="text--gray">
              Vous pouvez mettre toute les couleurs disponible comme fond.
            </p>
            <code>navbar--[couleur]</code>
            <CodeSandBoxPreview
              url={
                "https://codesandbox.io/embed/navbar-sasslib-m7slqo?fontsize=14&hidenavigation=1&theme=dark"
              }
              className="h--10 mt--1"
            ></CodeSandBoxPreview>
          </Section>
        </Section>
      </div>
    </>
  );
}