import {useState} from "react";
import {AccordionBody, AccordionTitle } from "../Accordion/Accordion";

function UncontrolledAccordion(props: any) {
  console.log("UncontrolledAccordion rendering");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="accordion">
      <AccordionTitle title="Sonnet №45" onChange={() => alert('click')}/>
      <button onClick={() => setCollapsed(!collapsed)}>Show/Hide</button>
      {!collapsed && <AccordionBody items={props.items}/>}
    </div>
  )
}

export default UncontrolledAccordion;
