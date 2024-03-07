import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(myProps) {
  return (<li>
    <img src={myProps.image} alt={myProps.title} />
    <h3>{myProps.title}</h3>
    <p>{myProps.description}</p>
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
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Props"
              description="something"
              image={componentsImg}
            />
            <CoreConcept></CoreConcept>
            <CoreConcept></CoreConcept>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
