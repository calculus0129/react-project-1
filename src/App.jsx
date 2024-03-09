import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcepts.jsx';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';

// function CoreConcepts() {
//   let size = {CORE_CONCEPTS}.length;
//   return (<script>for (let index = 0; index < size; index++) {
//     <CoreConcept
//     title={CORE_CONCEPTS[index].title}
//     description = {CORE_CONCEPTS[index].description}
//     image = {CORE_CONCEPTS[index].image}
//   />
//   }</script>);
// }

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function onClickHere(key) {
    // string => 'components', 'jsx', ...
    setSelectedTopic(key); // request to updata a value.
    // console.log(selectedTopic); // previous value before update.
  }

  const tabContent = (selectedTopic ? <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre><code>
      {EXAMPLES[selectedTopic].code}
    </code></pre>
  </div> : <p>Please Select a Topic!</p>);

  return (
    <div>
      <Header />
      <main>
        {/*The id is made as below so that the CSS file applies here.*/}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => onClickHere('components')}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => onClickHere('jsx')}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => onClickHere('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => onClickHere('state')}>States</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
