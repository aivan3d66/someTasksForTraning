import React from 'react';
import {UncontrolledOnOff} from "./UnconrtolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Uncontrolled OnOff button',
  component: UncontrolledOnOff,
}

const callback = action("On or Off clicked");

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Async when change defaultValue when already renders</div>
export const ModeHandler = () => <UncontrolledOnOff/>;
