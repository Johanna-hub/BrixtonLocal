import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';


import { Box, Text, Image } from '../atoms';


const tagMeta = {
  juice: {
    color: '#ffdd00',
    emoji: '🍹',
  },
  deli: {
    color: '#8E6B4E',
    emoji: '🧀',
  },
  art: {
    color: '#102077',
    emoji: '🎨',
  },
  coffee: {
    color: '#200e07',
    emoji: '☕',
  },
  bengali: {
    color: '#F4C430',
    emoji: '🇧🇩',
  },
  bread: {
    color: '#F8C671',
    emoji: '🥖',
  },
  cake: {
    color: '#f1f1f1',
    emoji: '🍰',
  },
  cakes: {
    color: '#f1f1f1',
    emoji: '🍰',
  },
  beer: {
    color: '#CA8D06',
    emoji: '🍺',
  },
  vietnamese: {
    color: '#da251e',
    emoji: '🇻🇳',
  },
  butcher: {
    color: '#DF9C85',
    emoji: '🥩',
  },
  fish: {
    color: '#F1480B',
    emoji: '🍣',
  },
  turkish: {
    color: '#2CBED2',
    emoji: '🇹🇷',
  },
  plants: {
    color: '#007f00',
    emoji: '🌱',
  },
  kids: {
    color: '#B5E729',
    emoji: '👶',
  },
  fashion: {
    color: '#1c1c1c',
    emoji: '👠',
  },
  toys: {
    color: '#14B8DD',
    emoji: '🧸',
  },
  support: {
    color: '#003e71',
    emoji: '🙏',
  },
  spanish: {
    color: '#ffc402',
    emoji: '🥘',
  },
  donate: {
    color: '#ACCB44',
    emoji: '🎁',
  },
  refugees: {
    color: '#052641',
    emoji: '🚣',
  },
  savouries: {
    color: '#D2933C',
    emoji: '🍞',
  },
  chocolate: {
    color: '#89503A',
    emoji: '🍫',
  },
  wine: {
    color: '#8E2D33',
    emoji: '🍷',
  },
  snacks: {
    color: '#FCDD8D',
    emoji: '🍿',
  },
  pizza: {
    color: '#8a2123',
    emoji: '🍕',
  },
  'zero-waste': {
    color: '#414e56',
    emoji: '🌍',
  },
  pilates: {
    color: '#f5f0e4',
    emoji: '🧘🏻',
  },
  'fruit & veg': {
    color: '#015d3f',
    emoji: '🍏',
  },
  cheese: {
    color: '#f2f484',
    emoji: '🧀',
  },
  yoga: {
    color: '#41404c',
    emoji: '🧘🏻',
  },
};

const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const Tag = ({ type: _type, ...props }) => {
  const type = (_type || '').trim();
  const bgColor = type && (tagMeta[type.toLowerCase()] || {}).color || 'rgba(103, 128, 159, 1)';
  const emoji = type && (tagMeta[type.toLowerCase()] || {}).emoji;

  return (
    <Box bg={bgColor} height={32} px={16} borderRadius={16} justifyContent="center" {...props}>
      <TagText color={chroma.contrast(bgColor, 'white') <= 4.5 ? 'black' : 'white'} style={{ display: 'flex' }}>
        {emoji && <Text fontSize={18} mr={1}>{emoji}</Text>}
        {type}
      </TagText>
    </Box>
  );
};

export default Tag;
