import 'styled-components';
import {scale} from 'react-native-size-matters';
export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    textDark: string;
    textLight: string;
    textMid: string;
    bgMid: string;
  };
  font: string;
  fontSizes: {
    12: number;
    14: number;
    16: number;
    18: number;
    28: number;
    32: number;
  };
}

export const defaultTheme: ITheme = {
  colors: {
    primary: '#B22E6F',
    secondary: '#333',
    textDark: '#333',
    textLight: '#FFF',
    textMid: '#999',
    bgMid: '#F6F4EF',
  },
  font: 'Heebo',
  fontSizes: {
    12: scale(12),
    14: scale(14),
    16: scale(16),
    18: scale(18),
    28: scale(28),
    32: scale(32),
  },
};
