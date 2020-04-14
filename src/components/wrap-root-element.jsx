import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '#components';

/*
 * App wrappers go here!
 * e.g. ThemeProvider, StateProvider, i18next, etc

*/

export default ({ element }) => {
  return (
    <ThemeProvider
      theme={theme}
    >
      {element}
    </ThemeProvider>
  );
};
