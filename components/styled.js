const { Platform } = require('react-primitives');

// FIXME: This is an unmaintained fork! Used for `shouldForwardProp` in native platforms (there's an open PR)
// Once the issue is merged/resolved, this should be changed back to `styled-components`
const styled = Platform.select({
  web: () => require('@elemental-design/styled-components'),
  default: () => require('@elemental-design/styled-components/primitives'),
})();

function _interopDefault(ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const styled_default = _interopDefault(styled);

if (Platform.OS === 'figma') {
  styled_default.div = styled_default.View;
  styled_default.button = styled_default.View;
  styled_default.span = styled_default.Text;
  styled_default.p = styled_default.Text;
  styled_default.h1 = styled_default.Text;
  styled_default.h2 = styled_default.Text;
  styled_default.h3 = styled_default.Text;
  styled_default.h4 = styled_default.Text;
  styled_default.h5 = styled_default.Text;
  styled_default.h6 = styled_default.Text;
  styled_default.img = styled_default.Image;
} else {
  styled_default.View = styled_default.div;
  styled_default.Text = styled_default.span;
  styled_default.Image = styled_default.img.attrs(({ source }) => ({ src: source }));
}

module.exports = styled;
