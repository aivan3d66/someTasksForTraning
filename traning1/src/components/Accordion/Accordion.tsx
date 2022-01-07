import {ItemsType, PropsType} from "../../App";

type AccordionPropsType = {
  title: string,
  collapsed: boolean,
  items: Array<ItemsType>,
  onChange: () => void,
}

function Accordion(props: any) {
  return (
    <div className="accordion">
      <AccordionTitle title={props.title} onChange={props.onChange}/>
      {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
  )
}

export function AccordionTitle(props: any) {
  return (
    <h3 className="accordion__title"
        onClick={props.onChange}
    >
      {props.title}
    </h3>
  )
}

export function AccordionBody(props: any) {
  return (
    <ul className="accordion__items">
      {props.items.map((i: any) => <li>{i.title}</li>)}
    </ul>
  )
}

export default Accordion;
