import {useState} from "react";
import {AccordionBody, AccordionTitle } from "./Accordion";

function UncontrolledAccordion() {
  console.log("UncontrolledAccordion rendering");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="accordion">
      <AccordionTitle title="Sonnet №45"/>
      <button onClick={() => setCollapsed(!collapsed)}>Show/Hide</button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

export default UncontrolledAccordion;
