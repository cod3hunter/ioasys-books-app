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
    28: number;
    12: number;
    16: number;
    18: number;
  };
}

export const defaultTheme: ITheme = {
  colors: {
    primary: '#B22E6F',
    secondary: '#333',
    textDark: '#333',
    textLight: '#FFF',
    textMid: '#999',
    bgMid: '#E5E5E5',
  },
  font: 'Heebo',
  fontSizes: {
    28: scale(28),
    12: scale(12),
    16: scale(16),
    18: scale(18),
  },
};
