import React from 'react';
import Rating from './Rating';

export default {
  title: 'components/Rating stories',
  component: Rating,
}

export const EmptyStars = () => <Rating value={0}/>;
export const Rating1 = () => <Rating value={1} />;
export const Rating2 = () => <Rating value={2}/>;
export const Rating3 = () => <Rating value={3}/>;
export const Rating4 = () => <Rating value={4}/>;
export const Rating5 = () => <Rating value={5}/>;


