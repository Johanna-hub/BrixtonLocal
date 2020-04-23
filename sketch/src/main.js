import sketch from 'sketch';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Artboard, Text, Page, View, Document } from 'react-sketchapp';
import { SketchRouter, Switch, Route, Link, withRouter } from 'react-sketchapp-router';

import { Box } from '#components/atoms';
import { PlaceList } from '#components/app';

import Home from '#components/pages/Home';
import Business from '#components/pages/Business';

const About = () => (
  <View>
    <Text>About</Text>
  </View>
);

const viewports = [{
  name: 'Mobile', width: 360, height: 640,
}, {
  name: 'Tablet', width: 1024, height: 768,
}];

const pageWidth = viewports.reduce((acc, { width }) => {
  acc += (width + 70);
  return acc;
}, 0);


const App = () => (
  <Document>
    <Page name="App" style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: pageWidth }}>
      <SketchRouter locations={['/business/ashbys-shop']} viewport={viewports}>
        <Switch>
          <Route path="/" exact render={({ location }) => <Home />} />
          <Route path="/business/:id" exact render={({ match: { params } , location }) => <Business id={params.id} />} />
          <Route path="/about" exact render={({ location }) => <About />} />
        </Switch>
      </SketchRouter>
    </Page>
  </Document>
);


export default () => {
  render(<App />, sketch.getSelectedDocument());
};
