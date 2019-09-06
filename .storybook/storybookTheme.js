// https://storybook.js.org/docs/configurations/theming/
import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
import { logoLockup } from 'app/assets/images'

export default create({
  base: Colors.background,

  colorPrimary: Colors.brand,
  colorSecondary: Colors.teal,
  sidebarSvgIconColor: Colors.brand,

  // UI
  appBg: Colors.mediumGray,
  appContentBg: Colors.white,
  appBorderColor: Colors.mediumGray,
  appBorderRadius: 6,

  // Typography
  fontBase: Type.fontFace,
  fontCode: 'monospace',

  // Text colors
  textColor: Colors.fontPrimary,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: Colors.fontPrimary,
  barSelectedColor: Colors.brand,
  barBg: Colors.white,

  // Form colors
  inputBg: Colors.background,
  inputBorder: 'transparent',
  inputTextColor: Colors.fontPrimary,
  inputBorderRadius: 4,

  brandTitle: 'Puffin',
  brandUrl: 'https://app.meetwithpuffin.com',
  brandImage: logoLockup,
});
