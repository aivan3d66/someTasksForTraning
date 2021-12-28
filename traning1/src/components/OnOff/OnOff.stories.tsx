import React from 'react';
import {OnOff} from "./OnOff";


export default {
  title: 'OnOff button',
  component: OnOff,
}

export const ModuleOn = () => <OnOff on={true}/>;
export const ModuleOff = () => <OnOff on={false}/>;
