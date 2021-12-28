import React, {useState} from 'react';
import './MyApp.scss';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UnconrtolledOnOff";
import UncontrolledAccordion from "./components/UncontrilledAcordion.stories.tsx/UncontrolledAcordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";

export type PropsType = {
  title?: string,
  value?: number,
  collapsed?: boolean,
  onChange?: () => void,
  onClick?: () => void,
  /**
   * Elements are showed when accordion is opened (not collapsed)
   */
  items?: Array<any>,
}

export const itemsList = [
  {title: 'John', value: 1},
  {title: 'Rick', value: 2},
  {title: 'Morty', value: 3},
  {title: 'Geralt', value: 4},
];

function PageTitle(props: PropsType) {
  console.log("AppTitle rendering");
  return <h1 className="app__title">{props.title}</h1>
}

function App() {
  const [collapseAcc, setCollapseAcc] = useState(false);

  const onChange = () => setCollapseAcc(!collapseAcc);

  console.log("App rendering");
  return (
    <div className="app__content">
      <PageTitle title={"William Shakespeare works"}/>
      <UncontrolledAccordion/>
      <UncontrolledRating/>
      <UncontrolledOnOff/>
      <br/>
      <hr/>
      <Accordion
        title={"Controlled title"}
        collapsed={collapseAcc}
        onChange={onChange}
      />
      <OnOff on={true}/>
      <br/>
      <hr/>
      <UncontrolledOnOff/>
    </div>
  );
}

export default App;
