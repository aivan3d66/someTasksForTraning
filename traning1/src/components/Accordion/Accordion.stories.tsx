import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Accordion stories',
  component: Accordion,
}

const callback = action("Accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onChange={callback}/>
export const MenuUnCollapsedMode = () => <Accordion title={"William Shakespeare works"} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
  const [value, setValue] = useState(true);
  return <Accordion title={"William Shakespeare works"} collapsed={value} onChange={() => setValue(!value)}/>
}
