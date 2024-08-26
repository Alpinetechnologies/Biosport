import chroma from 'chroma-js';
import { toLower } from 'lodash';

export interface ThemePrimaryColors {
  'primary-950': string;
}

export interface ThemeSecondaryColors {
  'secondary-50': string;
  'secondary-100': string;
  'secondary-200': string;
  'secondary-300': string;
  'secondary-400': string;
  'secondary-500': string;
  'secondary-600': string;
  'secondary-700': string;
  'secondary-800': string;
  'secondary-900': string;
  'secondary-950': string;
}

export interface ThemeDangerColors {
  'danger-50': string;
  'danger-100': string;
  'danger-200': string;
  'danger-300': string;
  'danger-400': string;
  'danger-500': string;
  'danger-600': string;
  'danger-700': string;
  'danger-800': string;
  'danger-900': string;
  'danger-950': string;
}

export interface ThemeColors
  extends ThemePrimaryColors,
    ThemeSecondaryColors,
    ThemeDangerColors {}

export const getShadeFromHue = (baseColors: string, shade: number) => {
  const current = chroma(baseColors).hsl();
  const h = current[0];
  const s = current[1];
  const l = current[2];

  if (shade === 0) {
    return chroma.hsl(h, s, 1, 1).hex();
  } else {
    const singleStep = l / 6;
    const diff = 1 - singleStep * shade;
    return chroma.hsl(h, s, diff, 1).hex();
  }
};

const dangerColor = {
  'danger-50': '#fef2f2',
  'danger-100': '#fee2e2',
  'danger-200': '#fecaca',
  'danger-300': '#fca5a5',
  'danger-400': '#fb923c',
  'danger-500': '#ef4444',
  'danger-600': '#dc2626',
  'danger-700': '#b91c1c',
  'danger-800': '#991b1b',
  'danger-900': '#7f1d1d',
  'danger-950': '#450a0a',
};

const lightSecondary: ThemeSecondaryColors = {
  'secondary-50': '#FFFFFF',
  'secondary-100': '#F7F7F8',
  'secondary-200': '#D0D3D7',
  'secondary-300': '#BABEC5',
  'secondary-400': '#A4A9B2',
  'secondary-500': '#787F8C',
  'secondary-600': '#656B77',
  'secondary-700': '#525761',
  'secondary-800': '#40434B',
  'secondary-900': '#2D2F35',
  'secondary-950': '#23252A',
};

const darkSecondary: ThemeSecondaryColors = {
  'secondary-50': '#23252A',
  'secondary-100': '#2D2F35',
  'secondary-200': '#40434B',
  'secondary-300': '#525761',
  'secondary-400': '#656B77',
  'secondary-500': '#787F8C',
  'secondary-600': '#A4A9B2',
  'secondary-700': '#BABEC5',
  'secondary-800': '#D0D3D7',
  'secondary-900': '#F7F7F8',
  'secondary-950': '#FFFFFF',
};

const parrotPrimary = {
  'primary-950': '#CEFF00',
};

const otherColors = {
  black: '#000000',
  white: '#ffffff',
  LightWhite: '#EEEEEE',
  lightGrey: '#9E9E9E',
  extraLightGrey: '#F9F9F9',
  grey: '#757575',
  transparentBlack: 'rgba(0, 0, 0, 0.6)',
  transparentWhite: 'rgba(256, 256, 256, 0.15)',
  darkGrey: '#212121',
  LightPink: '#FFF9E6',
  yellow: '#FFC107',
};

const isHex = (color = '') => color.length >= 3 && color.charAt(0) === '#';
const isRGB = (color = '') => toLower(color).substring(0, 3) === 'rgb';

const defaultColors = {
  ...parrotPrimary,
  ...lightSecondary,
  ...dangerColor,
};

export const getColorForString = (
  colorString: string = '',
  providedThemeColors: ThemeColors = defaultColors,
) => {
  if (!colorString) return null;
  const isValidColorString = isHex(colorString) || isRGB(colorString);
  return isValidColorString
    ? colorString
    : providedThemeColors[colorString as keyof ThemeColors];
};

export default {
  parrotPrimary,
  lightSecondary,
  darkSecondary,
  dangerColor,
  otherColors,
};
