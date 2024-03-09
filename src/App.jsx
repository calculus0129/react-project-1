import { CORE_CONCEPTS } from './data';
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
  let tabContent = "Please Click a Button!";

  function onClickHere(string='I CLICKED!') {
    // string => 'components', 'jsx', ...
    tabContent=string;
    console.log(tabContent);
  }

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
            <TabButton onSelect={()=>onClickHere('components')}>Components</TabButton>
            <TabButton onSelect={()=>onClickHere('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>onClickHere('props')}>Props</TabButton>
            <TabButton onSelect={()=>onClickHere('states')}>States</TabButton>
          </menu>
          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}

export default App;
