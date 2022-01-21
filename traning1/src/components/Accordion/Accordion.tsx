import React from "react";

type ItemsType = {
  title: string,
  value: number
}

type AccordionPropsType = {
  title: string,
  collapsed: boolean,
  items: Array<ItemsType>,
  onChange: () => void,
}

export const Accordion: React.FC<AccordionPropsType> = (
  {
    title,
    onChange,
    collapsed,
    items
  }
) => {

  return (
    <div className="accordion">
      <AccordionTitle title={title} onChange={onChange}/>
      {!collapsed && <AccordionBody items={items}/>}
    </div>
  )
}
type AccordionTitlePropsType = {
  onChange: () => void,
  title: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <h3 className="accordion__title"
        onClick={props.onChange}
    >
      {props.title}
    </h3>
  )
}

type AccordionBodyPropsType = {
  items: Array<ItemsType>
}

export function AccordionBody(props: AccordionBodyPropsType) {

  return (
    <ul className="accordion__items">
      {props.items.map((i: any) => <li>{i.title}</li>)}
    </ul>
  )
}

export default Accordion;
