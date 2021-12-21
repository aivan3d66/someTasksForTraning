import React, {useState} from 'react';
// import Accordion from './components/Accordion/Accordion';
// import Rating from './components/Raiting/Raiting';
import './MyApp.scss';
import {OnOffItem} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAcordion";
import UncontrolledRating from "./components/Raiting/UncontrolledRating";
import Accordion from './components/Accordion/Accordion';

export type PropsType = {
  title?: string,
  value?: number,
  collapsed?: boolean,
  onChange?: () => void
}

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
      <UncontrolledAccordion />
      <UncontrolledRating />
      <br/>
      <hr/>
      <Accordion title={"Controlled title"}
                 collapsed={collapseAcc}
                 onChange={onChange}
      />
      <br/>
      <hr/>
      <OnOffItem/>
      <OnOffItem/>
    </div>
  );
}

export default App;
