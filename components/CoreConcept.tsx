import Image, { StaticImageData } from "next/image";

export interface CoreConceptProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
}

const CoreConcept: React.FC<CoreConceptProps> = (props) => {
  return (
    <li>
      <Image src={props.img} alt={props.title} width={249} height={249} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
};

export default CoreConcept;
