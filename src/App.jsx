import CoreConcepts from "./components/CoreConcepts.jsx";
import { Header } from './components/Header.jsx';
import Examples from "./components/Examples.jsx";

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
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
