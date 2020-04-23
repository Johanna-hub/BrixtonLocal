import React from 'react';

import Box from '../atoms/Box';

const Container = ({ children, ...props }) => (
  <Box px={3} {...props}>
    {children}
  </Box>
);

export default Container;
