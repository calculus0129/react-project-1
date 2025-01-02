import { Tab } from "@/app/data";

const TabContent: React.FC<Tab> = ({ title, description, code }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
