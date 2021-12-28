import UncontrolledRating from "./UncontrolledRating";
import React from "react";

export default {
  title: 'UncontrolledRating stories',
  component: UncontrolledRating,
}

export const StarRating1 = () => <UncontrolledRating defaultValue={1}/>;
export const StarRating2 = () => <UncontrolledRating defaultValue={4}/>;
export const StarRating3 = () => <UncontrolledRating defaultValue={3}/>;
