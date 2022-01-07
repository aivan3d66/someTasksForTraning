import {ItemsType} from "../../App";
import s from "./Select.module.css";
import {useState} from "react";

type SelectInputType = {
  value?: any,
  onChange: (value: any) => void,
  items: Array<ItemsType>
}

export const SelectInput = (props: SelectInputType) => {
  const [active, setActive] = useState<boolean>(false);
  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  }
  const selectedItem = props.items.find(i => i.value === props.value);
  return (
    <>
      <div className={s.select + " " + (active ? s.active : "")}>
        <span className={s.main} onClick={toggleItems}>
          {selectedItem && selectedItem.title}
        </span>
        {
          active &&
          <div className={s.items}>
            {props.items.map((i: any) => <div
              key={i.value}
              onClick={() => onItemClick(i.value)}
            >{i.title}</div>)}
          </div>
        }
      </div>
    </>
  )
}
