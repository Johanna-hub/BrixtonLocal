import React from 'react';

import useWindowDimensions from '../utils/useDimensions';

import Box from '../atoms/Box';
import Text from '../atoms/Text';
import ResponsiveContainer from '../molecules/ResponsiveContainer';

import BusinessInfo from '../app/BusinessInfo';

const AppBar = ({ children, ...props }) => (
  <Box height={80} {...props}>
    {children}
  </Box>
);

const places = [{
  name: 'Ashby\'s Shop',
  category: 'groceries',
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  tags: ['Fruit & Veg', 'Bread'],
}, {
  name: 'Ashby\'s Shop 2',
  category: 'groceries',
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  tags: ['Fruit & Veg', 'Bread'],
}];

const Business = () => {
  const { width, height } = useWindowDimensions() || {};

  return (
    <Box flex={1}>
      <AppBar />
      <Box flex={1}>
        <BusinessInfo />
      </Box>
    </Box>
  );
};

export default Business;
