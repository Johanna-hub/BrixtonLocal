import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';


import { Box, Text, Image } from '../atoms';


const tagMeta = {
  juice: {
    color: '#ffdd00',
    emoji: '🍹',
    aliases: ['drink', 'alcohol-free']
  },
  'alcohol-free': {
    color: '#087f23',
    emoji: '🍹',
    aliases: ['mocktail'],
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
  indian: {
    color: '#BD3C36',
    emoji: '🍛',
  },
  bread: {
    color: '#F8C671',
    emoji: '🍞',
  },
  breakfast: {
    color: '#F4CC20',
    emoji: '🥐'
  },
  bakery: {
    color: '#ffdca7',
    emoji: '🥖'
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
  chicken: {
    color: '#D47218',
    emoji: '🍗',
  },
  photo: {
    color: '#141004',
    emoji: '📷'
  },
  crepe: {
    color: '#fffbd1',
    emoji: '🥞',
    aliases: ['pancake']
  },
  fish: {
    color: '#F1480B',
    emoji: '🍣',
    aliases: ['sushi']
  },
  turkish: {
    color: '#2CBED2',
    emoji: '🇹🇷',
  },
  plants: {
    color: '#007f00',
    emoji: '🌱',
    aliases: ['garden']
  },
  flower: {
    color: '#B080C2',
    emoji: '🌸',
    aliases: ['flowers']
  },
  online: {
    color: '#184F7A',
    emoji: '🌐',
    aliases: ['internet']
  },
  kids: {
    color: '#B5E729',
    emoji: '👶',
    aliases: ['children']
  },
  fashion: {
    color: '#1c1c1c',
    emoji: '👠',
  },
  market: {
    color: '#BB4030',
    emoji: '🧺',
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
    aliases: ['gift']
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
  'ice-cream': {
    color: '#f1f1f1',
    emoji: '🍦',
    aliases: ['icecream', 'ice cream'],
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
  'fruit': {
    color: '#015d3f',
    emoji: '🍏',
    aliases: ['veg'],
  },
  caribbean: {
    color: '#FCE2C0',
    emoji: '🍛'
  },
  pet: {
    color: '#DD9B61',
    emoji: '🦜'
  },
  garage: {
    color: '#8091A8',
    emoji: '🚗',
    aliases: ['car']
  },
  exercise: {
    color: '#4C76B1',
    emoji: '🏃',
    aliases: ['hiit', 'running', 'jogging'],
  },
  books: {
    color: '#F7D69A',
    emoji: '📚',
  },
  cheese: {
    color: '#f2f484',
    emoji: '🧀',
  },
  yoga: {
    color: '#41404c',
    emoji: '🧘🏻',
  },
  wellness: {
    color: '#C82732',
    emoji: '🧘🏻',
    aliases: ['health']
  },
};

const tagColorStore = {};


const getTagData = (_type) => {
  const type = (_type || '').toLowerCase();
  let color, emoji;
  for (const tagKey in tagMeta) {
    const meta = tagMeta[tagKey];
    if ((type || '').includes(tagKey) || (meta && (meta.aliases || []).find(alias => type.includes(alias)))) {
      color = meta.color;
      //emoji = meta.emoji;
      return { color: meta.color, emoji: meta.emoji };
    }/* else if (meta.aliases) {
      for (const alias in meta.aliases) {
        for (const tagKey_ in tagMeta) {
          const meta_ = tagMeta[tagKey_]
          if ((alias).includes(tagKey_)) {
            return { color: meta_.color, emoji: meta_.emoji };
          }
        }
      }
    }*/
  }
  if (!color) {
    if (!tagColorStore[type]) {
      tagColorStore[type] = '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
    }
    color = tagColorStore[type];
  }

  return { color };
}

const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const Tag = ({ type: _type, ...props }) => {
  const type = (_type || '').trim();
  const { color: bgColor } = getTagData(type);

  return (
    <Box bg={bgColor} height={32} px={16} borderRadius={16} justifyContent="center" {...props}>
      <TagText color={chroma.contrast(bgColor, 'white') <= 4.5 ? 'black' : 'white'} style={{ display: 'flex' }}>
        {/* TODO: Decide whether to strip out the emoji system fully, or keep it for the future? */}
        {/*emoji && <Text fontSize={18} mr={1}>{emoji}</Text>*/}
        {type}
      </TagText>
    </Box>
  );
};

export default Tag;
