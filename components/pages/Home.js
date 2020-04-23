import React from 'react';

import useWindowDimensions from '../utils/useDimensions';

import Box from '../atoms/Box';
import Text from '../atoms/Text';
import ResponsiveContainer from '../molecules/ResponsiveContainer';

import PlaceList from '../app/PlaceList';
import CategoryList from '../app/CategoryList';

const AppBar = ({ children, ...props }) => (
  <Box height={80} {...props}>
    {children}
  </Box>
);

const categories = [{
  name: 'Community',
  count: 30,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Fitness',
  count: 25,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Groceries',
  count: 20,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Services',
  count: 15,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Shops',
  count: 16,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Takeaway',
  count: 11,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}, {
  name: 'Wine + Beer',
  count: 8,
  source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
}
]

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

const Home = () => {
  const { width, height } = useWindowDimensions() || {};

  return (
    <Box flex={1}>
      <AppBar />
      <Box width={width} maxWidth={width} height={height}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text fontSize={48} lineHeight={56} fontFamily="Montserrat" fontWeight={600}>
            Brixton Local
          </Text>
        </Box>
        <CategoryList mb={40} title="Browse Brixton by Category" items={categories} />
      </Box>
      <Box flex={1}>
        <ResponsiveContainer>
          <PlaceList items={places} />
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Home;
