import { configComponents } from "./config";
import ParentComponent from "../components/ParentComponent";

const visibleComponents = configComponents.filter((el) => el.isVisible);

export default function Content() {
  return (
    <>
      {visibleComponents.map((i) => (
        <ParentComponent key={i.id} data={i} />
      ))}
    </>
  );
}
