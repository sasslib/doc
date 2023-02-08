import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import sdk from "@stackblitz/sdk";
import CodeSandBoxPreview from "../components/CodeSandboxPreview";

export default function Home() {
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
      ></Navbar>
      <div
        className="py--1 px--1 d--flex f--direction--column"
        style={{ gap: 15 }}
      >
        <Section title={"Colors"}>
          <p className="text--gray ml--1">
            Voici la liste de toute les couleurs possibles.
          </p>
          <ul className="ml--2 mb--1 w--1-6">
            <li className="text--orange">orange</li>
            <li className="text--purple">purple</li>
            <li className="text--black">black</li>
            <li className="text--primary">primary</li>
            <li className="text--secondary">secondary</li>
            <li className="text--info">info</li>
            <li className="text--error">error</li>
            <li className="text--blue">blue</li>
            <li className="text--yellow">yellow</li>
            <li className="text--green">green</li>
            <li className="text--gray">gray</li>
            <li className="text--white bg--black">white</li>
          </ul>
          <p className="mb--1">
            Pour utiliser une couleur, vous devez utiliser
            [text|bg]--[hover(?)]--[couleur]
          </p>
          <CodeSandBoxPreview
            url={
              "https://codesandbox.io/embed/elegant-lamarr-1ces1o?fontsize=14&hidenavigation=1&theme=dark"
            }
            className="h--10"
          ></CodeSandBoxPreview>
        </Section>
        <Section title={"Card"}>
          <p>
            card title | <code>card--title</code>
          </p>
          <p>
            card body | <code>card--body</code>
          </p>
          <CodeSandBoxPreview
            url={
              "https://codesandbox.io/embed/card-sasslib-e32gl0?fontsize=14&hidenavigation=1&theme=dark"
            }
            className="h--10 mt--1"
          ></CodeSandBoxPreview>
        </Section>
        <Section title={"Buttons"}>
          <p class="mb--1">
            Vous pouvez utiliser toute les couleurs disponible sur les boutons
          </p>
          <CodeSandBoxPreview
            url={
              "https://codesandbox.io/embed/buttons-sasslib-ydwpkr?fontsize=14&hidenavigation=1&theme=dark"
            }
            className="h--10"
          ></CodeSandBoxPreview>
        </Section>
        <Section title={"Grid System"}>
          <p>Pour chaque item vous pouvez utiliser col-[number]-[breakpoint]</p>
          <CodeSandBoxPreview
            url={
              "https://codesandbox.io/embed/grid-system-sasslib-3jlpn4?fontsize=14&hidenavigation=1&theme=dark"
            }
            className="h--10 mt--1"
          ></CodeSandBoxPreview>
        </Section>
        <Section title={"Utilities"}>
          <Section className="border--none">
            <h2 className="text--sm">Border</h2>
            <Section
              className="border--none"
              title={"Border Style"}
              titleAs={"h4"}
              titleClassName={"my--1 pl--1"}
            >
              <p class="pl--2 text--gray">style de bordure disponible:</p>
              <ul class="pl--3">
                <li>none</li>
                <li>dotted</li>
                <li>dashed</li>
                <li>solid</li>
                <li>double</li>
                <li>groove</li>
                <li>ridge</li>
                <li>inset</li>
                <li>outset</li>
              </ul>
              <code class="my--1 pl--3">border--[style]</code>
            </Section>
            <Section
              className="border--none"
              title={"Border Witdth"}
              titleAs={"h4"}
              titleClassName={"my--1 pl--1"}
            >
              <p class="text--gray pl--2">taille de la bordure</p>
              <code class="pl--3">border--[1-99]</code>
            </Section>
            <Section
              className="border--none"
              title={"Border Radius"}
              titleClassName="my--1 pl--1"
            >
              <p class="text--gray pl--2">taille des arrondis disponible</p>
              <ul class="pl--3">
                <li>xs</li>
                <li>sm</li>
                <li>md</li>
                <li>lg</li>
                <li>xl</li>
              </ul>
              <code class="my--1 pl--3">rounded--[radius]</code>
            </Section>
            <CodeSandBoxPreview
              url={
                "https://codesandbox.io/embed/border-sasslib-0w2v7k?fontsize=14&hidenavigation=1&theme=dark"
              }
              className="h--10 mt--1"
            ></CodeSandBoxPreview>
          </Section>
          <Section title={"Margin"} titleAs={"h3"} className="border--none">
            <Section
              title={"Margin Left(ml)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">ml--[1-99]</code>
            </Section>
            <Section
              title={"Margin Right(mr)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">mr--[1-99]</code>
            </Section>
            <Section
              title={"Margin Top(mt)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">mt--[1-99]</code>
            </Section>
            <Section
              title={"Margin Bottom(mb)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">mb--[1-99]</code>
            </Section>
            <Section
              title={"Margin X(mx)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <p class="pl--2 text--gray">margin right & margin left</p>
              <code class="pl--2">mx--[1-99]</code>
            </Section>
            <Section
              title={"Margin Y(my)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <p class="pl--2 text--gray">margin top & margin bottom</p>
              <code class="pl--2">my--[1-99]</code>
            </Section>
          </Section>
          <Section title={"Padding"} titleAs={"h3"} className="border--none">
            <Section
              title={"Padding Left(ml)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">pl--[1-99]</code>
            </Section>
            <Section
              title={"Padding Right(mr)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">pr--[1-99]</code>
            </Section>
            <Section
              title={"Padding Top(mt)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">pt--[1-99]</code>
            </Section>
            <Section
              title={"Padding Bottom(mb)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <code class="pl--2">pb--[1-99]</code>
            </Section>
            <Section
              title={"Padding X(mx)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <p class="pl--2 text--gray">padding right & padding left</p>
              <code class="pl--2">px--[1-99]</code>
            </Section>
            <Section
              title={"Padding Y(my)"}
              titleAs={"h4"}
              titleClassName="pl--1"
              className="border--none"
            >
              <p class="pl--2 text--gray">padding top & padding bottom</p>
              <code class="pl--2">py--[1-99]</code>
            </Section>
          </Section>
          <Section
            title={"Width & Height"}
            titleAs={"h3"}
            titleClassName="mt--1"
            className="border--none"
          >
            <Section
              title={"Width"}
              titleAs={"h4"}
              titleClassName=""
              className="border--none pl--2"
            >
              <Section
                title={"Relative"}
                titleAs={"h5"}
                titleClassName=""
                className="border--none pl--2"
              >
                <p>il y a 2 types de fenêtres</p>
                <ul class="pl--1">
                  <li>6</li>
                  <li>12</li>
                </ul>
                <code>w--[fenetre]-[6|12]</code>
              </Section>
              <Section
                title={"Fixe"}
                titleAs={"h5"}
                titleClassName="mt--1"
                className="border--none pl--2"
              >
                <p>La largeur peut allez de 1 à 99</p>
                <code>w--[1--99]</code>
              </Section>
            </Section>
            <Section
              title={"Height"}
              titleAs={"h4"}
              titleClassName="mt--1"
              className="border--none pl--2"
            >
              <Section
                title={"Relative"}
                titleAs={"h5"}
                titleClassName=""
                className="border--none pl--2"
              >
                <p>il y a 2 types de fenêtres</p>
                <ul class="pl--1">
                  <li>6</li>
                  <li>12</li>
                </ul>
                <code>h--[fenetre]-[6|12]</code>
              </Section>
              <Section
                title={"Fixe"}
                titleAs={"h5"}
                titleClassName="mt--1"
                className="border--none pl--2"
              >
                <p>La largeur peut allez de 1 à 99</p>
                <code>h--[1--99]</code>
              </Section>
            </Section>
            <CodeSandBoxPreview
              url={
                "https://codesandbox.io/embed/height-width-sasslib-qcv8xh?fontsize=14&hidenavigation=1&theme=dark"
              }
              className="h--10"
            ></CodeSandBoxPreview>
          </Section>
        </Section>
      </div>
    </>
  );
}
