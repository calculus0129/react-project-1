"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import CoreConcept from "@/components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "@/app/data";
import TabButton from "@/components/TabButton";
import TabContent from "@/components/TabContent";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import NextIntro from "@/components/NextIntro";
// import "./page.css";

const reactDescriptions = ["Advanced", "Basic", "Core", "Fundamental"];

import componentsImg from "@/public/assets/components.png";

export default function Home() {
  const [description, setDescription] = useState(reactDescriptions[0]);
  const [tab, setTab] = useState("");

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
          <div id="tab-content">
            {tab === "" ? (
              <p>Please Select a Topic.</p>
            ) : (
              <TabContent {...EXAMPLES[tab]} />
            )}
          </div>
        </section>
        <section id="next-intro">
          <NextIntro styles={styles} />
        </section>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
