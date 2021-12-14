import {PropsType} from "../../App";

function Accordion(props: PropsType) {
  console.log("Accordion rendering");
  return (
    <div className="accordion">
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/> }
    </div>
  )
}

export function AccordionTitle(props: PropsType) {
  console.log("AccordionTitle rendering");
  return <h3 className="accordion__title">{props.title}</h3>
}


export function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul className="accordion__items">
      <li className="accordion__item">
        The other two, slight air and purging fire,<br/>
        Are both with thee, wherever I abide;<br/>
        The first my thought, the other my desire,<br/>
        These present-absent with swift motion slide.<br/>
      </li>
      <li className="accordion__item">
        For when these quicker elements are gone<br/>
        In tender embassy of love to thee,<br/>
        My life, being made of four, with two alone<br/>
        Sinks down to death, oppress'd with melancholy;<br/>
      </li>
      <li className="accordion__item">
        Until life's composition be recured<br/>
        By those swift messengers return'd from thee,<br/>
        Who even but now come back again, assured<br/>
        Of thy fair health, recounting it to me:<br/>
      </li>
      <li className="accordion__item">
        This told, I joy; but then no longer glad,<br/>
        I send them back again and straight grow sad.<br/>
      </li>
    </ul>
  )
}

export default Accordion;
