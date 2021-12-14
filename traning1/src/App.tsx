import React from 'react';
// import Accordion from './components/Accordion/Accordion';
// import Rating from './components/Raiting/Raiting';
import './MyApp.scss';
import {OnOffItem} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAcordion";
import UncontrolledRating from "./components/Raiting/UncontrolledRating";

export type PropsType = {
  title?: string,
  value?: number,
  collapsed?: boolean,
}

function PageTitle(props: PropsType) {
  console.log("AppTitle rendering");
  return <h1 className="app__title">{props.title}</h1>
}

function App() {
  console.log("App rendering");
  return (
    <div className="app__content">
      <PageTitle title={"William Shakespeare works"}/>
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      {/*<Accordion title={"Menu"} collapsed={true}/>*/}
      {/*<Accordion title={"Users"} collapsed={false}/>*/}
      <UncontrolledAccordion />
      <UncontrolledRating />
      <br/>
      <hr/>
      <OnOffItem/>
      <OnOffItem/>
    </div>
  );
}

export default App;
