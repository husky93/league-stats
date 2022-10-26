import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#0f1012',
  gray: {
    50: '#f9fafa',
    100: '#f1f1f2',
    200: '#e7e7e8',
    300: '#d3d4d6',
    400: '#abadb1',
    500: '#7d7f85',
    600: '#52545d',
    700: '#333640',
    800: '#1e2026',
    900: '#18191e',
  },
  orange: {
    50: '#fefaf6',
    100: '#fceadb',
    200: '#f8d2b0',
    300: '#f3ad71',
    400: '#df904b',
    500: '#c07c41',
    600: '#a26937',
    700: '#81532c',
    800: '#664222',
    900: '#53361c',
  },
  yellow: {
    50: '#fffefb',
    100: '#fdf9e9',
    200: '#f9edbd',
    300: '#f5df87',
    400: '#e9ca4f',
    500: '#c0a641',
    600: '#998534',
    700: '#786828',
    800: '#5a4e1e',
    900: '#4a4019',
  },
  green: {
    50: '#f3fef8',
    100: '#b8f9d6',
    200: '#54f09d',
    300: '#48d68b',
    400: '#3fbc79',
    500: '#36a168',
    600: '#2d8556',
    700: '#236843',
    800: '#1d5537',
    900: '#18462d',
  },
  teal: {
    50: '#ebfdfd',
    100: '#a2f7f4',
    200: '#4feae5',
    300: '#47d1cd',
    400: '#3cb2ae',
    500: '#339794',
    600: '#297b78',
    700: '#205f5d',
    800: '#1b4f4e',
    900: '#164140',
  },
  cyan: {
    50: '#f0fcfe',
    100: '#c0f2fa',
    200: '#a1ecf7',
    300: '#7be4f4',
    400: '#49c4d7',
    500: '#43b4c6',
    600: '#3ca2b2',
    700: '#328693',
    800: '#296e79',
    900: '#20555e',
  },
  blue: {
    50: '#eff7fe',
    100: '#c5e1fa',
    200: '#99cbf6',
    300: '#68b2f2',
    400: '#4b99dd',
    500: '#4083be',
    600: '#366e9f',
    700: '#295479',
    800: '#214563',
    900: '#1b3851',
  },
  purple: {
    50: '#f8f6fe',
    100: '#e4dafc',
    200: '#d0bef9',
    300: '#b295f6',
    400: '#9d78f3',
    500: '#8151ef',
    600: '#6b43c8',
    700: '#5837a4',
    800: '#482d86',
    900: '#352163',
  },
  pink: {
    50: '#fef5fa',
    100: '#fcd7eb',
    200: '#f9b6d9',
    300: '#f586c1',
    400: '#f15fad',
    500: '#cf468f',
    600: '#b13c7b',
    700: '#903164',
    800: '#71264e',
    900: '#531c39',
  },
  primary: {
    50: '#fef6ef',
    100: '#f9dbbf',
    200: '#f4ba85',
    300: '#e2944c',
    400: '#ca8444',
    500: '#ab703a',
    600: '#905e31',
    700: '#744c27',
    800: '#624021',
    900: '#462e18',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  config,
});

export default theme;
