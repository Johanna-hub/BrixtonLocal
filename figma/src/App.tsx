import * as React from 'react';
import { Page, Frame } from 'react-figma';

// @ts-ignore
import styled, { ThemeProvider } from 'styled-components';
import { layout } from 'styled-system';

import Section from './components/Section';
import { Subtitle } from './components/Heading';

import { Text, Box, Image } from '#components/atoms';
import theme from '#components/theme';

import PlaceList from '#components/app/PlaceList';
import CategoryList from '#components/app/CategoryList';

const Artboard = styled(Frame)`
  padding: 20px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${layout}
`;

const Components = () => (
  <Box justifyContent="flex-start" flex={1} flexDirection="column">
    <Text fontSize={40}>TODO: Placeholder</Text>
  </Box>
)

const ButtonText = styled(Text)``;
ButtonText.defaultProps = {
  color: '#DE2F2F',
};

const Button = ({ children, ...props }: { children?: string }) => (
  <Box {...props}>
    <ButtonText>
      {children}
    </ButtonText>
  </Box>
);
Button.defaultProps = {
  paddingY: 2,
  paddingX: 3,
  // Border styling:
  borderRadius: 4,
  borderColor: '#DE2F2F',
  borderWidth: 1,
};


const places = [{
  id: 0,
  name: 'Ashby\'s Shop',
  category: 'groceries',
  source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
  tags: ['Fruit & Veg', 'Bread'],
}, {
  id: 1,
  name: 'Ashby\'s Shop',
  category: 'groceries',
  source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
  tags: ['Fruit & Veg', 'Bread'],
}];

const categories = [{
  name: 'Community',
  count: 30,
}, {
  name: 'Fitness',
  count: 25
}, {
  name: 'Groceries',
  count: 20,
}, {
  name: 'Services',
  count: 15,
}]

const styleguide = [{
  name: 'Design',
  type: 'design',
  isCurrent: true,
  data: {},
  screens: [{
    name: 'Design',
    component: Components,
    data: {},
  }],
  pages: [{
    name: 'Colour',
    sections: [{
      title: 'Colours',
      description: 'Colour palettes and usage.',
      data: {},
      component: () => (
        <>
          <Subtitle mb={3}>Colour Keys</Subtitle>
          <Box>
            <Text>Primary Colour</Text>
            <Text>Secondary Colour</Text>
          </Box>
        </>
      ),
    }]
  }],
}, {
  name: 'Components',
  type: 'components',
  isCurrent: true,
  data: {},
  screens: [{
    name: 'Components',
    component: Components,
    data: {},
  }],
  pages: [{
    name: 'Buttons',
    sections: [{
      title: 'Buttons',
      description: 'Buttons are used for actions. Lorem ipsum.',
      data: {},
      component: () => (
        <>
          <Subtitle mb={3}>Default examples</Subtitle>
          <Box flexDirection="row">
            <Button>Button</Button>
          </Box>
        </>
      ),
    }]
  }, {
    name: 'Places',
    sections: [{
      title: 'Places',
      description: 'Places can be items, or full pages. Lorem ipsum...',
      data: {},
      component: () => (
        <>
          {/* <Subtitle mb={3}>PlaceItem</Subtitle>
          <Box flexDirection="row">
            <PlaceItem size={328} />
          </Box> */}
          <Subtitle mb={3}>{`<PlaceList>`}</Subtitle>
          <Box>
            <PlaceList width={328} style={{ size: 328 }} items={places} />
          </Box>
        </>
      ),
    }]
  }, {
    name: 'Categories',
    sections: [{
      title: 'Categories',
      description: 'Categories... Lorem ipsum...',
      data: {},
      component: () => (
        <>
          {/* <Subtitle mb={3}>PlaceItem</Subtitle>
        <Box flexDirection="row">
          <PlaceItem size={328} />
        </Box> */}
          <Subtitle mb={3}>{`<CategoryList>`}</Subtitle>
          <Box>
            <CategoryList title="Browse Brixton by Category" items={categories} />
          </Box>
        </>
      ),
    }]
  }],
}]

const StyleGuide = () => (
  <>
    {styleguide.map(({
      type, name, screens, data, pages,
    }) => (
        <>
          <Page name={name} key={name}>
            {screens.map(({ name: screenName, component: Component, data: compData }) => (
              <Artboard width={600} name={screenName}>
                <Component {...{ [type]: Object.assign({}, data, compData) }} />
              </Artboard>
            ))}
          </Page>
          {pages && pages.map(page => (
            <Page name={`    ↳ ${page.name}`} key={`${name} / ${page.name}`}>
              {(page.sections || []).map(({ title, description, component: Component, data: compData }) => (
                <Artboard width={600} name={title}>
                  <Section title={title} description={description}>
                    <Component {...{ [type]: Object.assign({}, data, compData) }} />
                  </Section>
                </Artboard>
              ))}
            </Page>
          ))}
        </>
      ))}
  </>
);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyleGuide />
    </ThemeProvider>
  );
};
