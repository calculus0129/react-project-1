"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import CoreConcept from "@/components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "@/app/data";
import TabButton from "@/components/TabButton";
import TabContent from "@/components/TabContent";
import { useEffect, useState } from "react";

const reactDescriptions = ["Advanced", "Basic", "Core", "Fundamental"];

import componentsImg from "@/public/assets/components.png";

export default function Home() {
  const [description, setDescription] = useState(reactDescriptions[0]);
  const [tab, setTab] = useState("components");

  useEffect(() => {
    // Generate a random description after the component is mounted
    const idx = Math.floor(Math.random() * reactDescriptions.length);
    setDescription(reactDescriptions[idx]);
  }, []);

  // Closure
  // input: string s.
  // output: a closure () => void that sets the tab to s.
  const handleSelect = (s: string) => () => {
    setTab(() => s);
  };

  return (
    <div className={styles.page}>
      <Header desc={description} />
      <main className={styles.main}>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              key={2}
              title="Components"
              desc="Reusable building blocks for your React app."
              img={componentsImg}
            />
            <CoreConcept
              key={3}
              title="Props"
              desc="custom attributes that can be set on components."
              img="/assets/config.png"
            />
            {CORE_CONCEPTS.map((concept, idx: number) => {
              return <CoreConcept key={idx} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((example: string, idx: number) => {
              return (
                <TabButton key={idx} onSelect={handleSelect(example)}>
                  {example}
                </TabButton>
              );
            })}
          </menu>
          <TabContent {...EXAMPLES[tab]} />
        </section>
        <section id="deployment">
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>app/page.tsx</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
