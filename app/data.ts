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
