const colors = {
  // colour scales here:
  greens: ['#ae1', '#1e1'],
  reds: ['#f11', '#f54'],
};

colors.red = colors.reds[5];

const fontSizes = [56, 48, 36, 24, 20, 16, 14];

const breakpoints = ['640px', '1024px', '1280px'];

/* 0dp < mobile < 640dp */
/* 640dp < tablet < 1024dp */
/* 1024dp < desktop_small < 1280dp */
/* 1280dp < desktop_large < ∞dp */

breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop_small = breakpoints[2];
breakpoints.desktop_large = breakpoints[3];

// aliases
breakpoints.desktop = breakpoints.desktop_small;


const space = [0, 4, 8, 16, 32, 64, 128];

export default {
  space,
  fontSizes,
  breakpoints,
  colors,
};
