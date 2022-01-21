import s from "./Select.module.css";
import {useState, KeyboardEvent, useEffect} from "react";

type SelectInputType = {
  value?: any,
  onChange: (value: any) => void,
  items: any
}

export const SelectInput = (props: any) => {
  const [active, setActive] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<any>(props.value);

  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  }

  const selectedItem = props.items.find((i: any) => i.value === props.value);
  const hoveredItem = props.items.find((i: any) => i.value === hoveredElement);

  useEffect(() => {
    setHoveredElement(props.value)
  }, [props.value])

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElement) {
          const pretElement = e.key === "ArrowDown"
            ? props.items[i + 1]
            : props.items[i - 1]
          if (pretElement) {
            props.onChange(pretElement.value)
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false)
    }
  }

  return (
    <>
      <div
        onKeyUp={onKeyUp}
        className={s.select + " " + (active ? s.active : "")}
        tabIndex={0}
      >
        <span className={s.main} onClick={toggleItems}>
          {selectedItem && selectedItem.title}
        </span>
        {
          active &&
          <div className={s.items}>
            {props.items.map((i: any) => <div
              onMouseEnter={() => setHoveredElement(i.value)}
              className={s.item + " " + (hoveredItem === i ? s.selected : "")}
              key={i.value}
              onClick={() => onItemClick(i.value)}
            >{i.title}</div>)}
          </div>
        }
      </div>
    </>
  )
}
