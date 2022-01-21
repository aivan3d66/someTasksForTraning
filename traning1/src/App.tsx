import React, {useState} from 'react';
import './MyApp.scss';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UnconrtolledOnOff";
import UncontrolledAccordion from "./components/UncontrilledAcordion.stories.tsx/UncontrolledAcordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";


const items = [
  {title: 'John', value: 1},
  {title: 'Rick', value: 2},
  {title: 'Morty', value: 3},
  {title: 'Geralt', value: 4},
];

function App() {
  const [collapsed, setCollapseAcc] = useState<boolean>(false);
  const onChange = () => setCollapseAcc(!collapsed);

  return (
    <div className="app__content">
      <h1 title={"William Shakespeare works"}/>
      <UncontrolledAccordion items={items}/>
      <UncontrolledRating/>
      <UncontrolledOnOff/>
      <br/>
      <hr/>
      <Accordion
        items={items}
        title={"Controlled title"}
        collapsed={collapsed}
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

// export type ItemsType = {
//   title: string,
//   value: any,
// }
//
// export type PropsType = {
//   title?: string,
//   value?: number,
//   collapsed?: boolean,
//   onChange?: () => void,
//   onClick?: () => void,
//   items?: Array<ItemsType>,
// }
//
// const items = [
//   {title: 'John', value: 1},
//   {title: 'Rick', value: 2},
//   {title: 'Morty', value: 3},
//   {title: 'Geralt', value: 4},
// ];
//
// function App() {
//   const [collapsed, setCollapseAcc] = useState(false);
//   const onChange = () => setCollapseAcc(!collapsed);
//
//   return (
//     <div className="app__content">
//       <Accordion
//         items={items}
//         title={"Controlled title"}
//         collapsed={collapsed}
//         onChange={onChange}
//       />
//     </div>
//   );
// }
