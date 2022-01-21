import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from "@storybook/addon-actions";
import {Story} from '@storybook/react';

export default {
  title: 'components/Accordion stories',
  component: Accordion,
}

const callback = action("Accordion mode change event fired");
const onClickCallback = action("Some item was clicked");

const Template: Story<any> = (args) => <Accordion {...args}/>;

const callbacksProps = {
  onChange: callback,
  onClick: onClickCallback,
}

export const MenuCollapseMode = Template.bind({})
MenuCollapseMode.args = {
  title: "Menu",
  collapsed: true,
  items: [],
  ...callbacksProps,
}

export const UserUnCollapsedMode = Template.bind({})
UserUnCollapsedMode.args = {
  title: "Users",
  collapsed: false,
  items: [{title: 'John', value: 1}, {title: 'Rick', value: 2}, {title: 'Morty', value: 3}, {
    title: 'Geralt',
    value: 4
  }],
  ...callbacksProps,
}


export const ModeChanging: Story<any> = (args) => {
  const [value, setValue] = useState(true);
  return <Accordion title={"William Shakespeare works"}
                    collapsed={value}
                    {...args}
                    onChange={() => setValue(!value)}/>
}
