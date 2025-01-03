// import componentsImg from '@/public/assets/components.png';
// import propsImg from '@/public/assets/props.png';
import jsxImg from "@/public/assets/jsx-ui.png";
import stateImg from "@/public/assets/state-mgmt.png";
import { CoreConceptProps } from "@/components/CoreConcept";

export const CORE_CONCEPTS: Array<CoreConceptProps> = [
  {
    img: jsxImg,
    title: "JSX",
    desc: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    img: stateImg,
    title: "State",
    desc: "React-managed data which, when changed, causes the component to re-render & the UI to update. Divided into Local, Cross-Component, and App-wide State. Later two can be managed by Redux.",
  },
];

export type Tab = { title: string; description: string; code: string };

export const EXAMPLES: Record<string, Tab> = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Props are custom attributes that can be set on components. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((curVisible)=>true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
