import React from 'react';

export const extendStyles = (Component, fn) => (props) => {
  const styles = fn(props);

  const baseStyles = {};
  const pseudoStyles = {};

  for (const att in styles) {
    if (styles[att]) {
      const value = styles[att];

      if (att.startsWith(':')) {
        pseudoStyles[att.slice(1)] = value;
      } else {
        baseStyles[att] = value;
      }
    }
  }

  return (
    <Component {...baseStyles} styles={pseudoStyles} {...props} />
  );
};

export const isFirst = (i) => i === 0;
export const isLast = (i, length) => (i === length - 1);

