import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({image: img, description, title}) {
  return (<li>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>);
}

function Header() {
  const description = genRandomInt(2);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[description]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
}

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
      </main>
    </div>
  );
}

export default App;
