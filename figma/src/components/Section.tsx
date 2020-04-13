import * as React from 'react';

import { Text, Box } from '#components/atoms';

import { Title } from './Heading';

interface SectionProps {
  title: string,
  description?: string,
  children?: React.ReactNode,
};

const Section = ({ title, description, children }: SectionProps) => (
  <Box flex={1} maxWidth={560}>
    <Box mb={40}>
      <Title>
        {title}
      </Title>
      {Boolean(description) && (
        <Text fontSize={14} mt={2} style={{ maxWidth: 560 }}>
          {description}
        </Text>
      )}
    </Box>
    {children}
  </Box>
);

export default Section;
