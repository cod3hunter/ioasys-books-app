import 'styled-components';

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    textDark: string;
    textLight: string;
    textMid: string;
  };
  font: string;
}

export const defaultTheme: ITheme = {
  colors: {
    primary: '#B22E6F',
    secondary: '#333',
    textDark: '#333',
    textLight: '#FFF',
    textMid: '#999',
  },
  font: 'Heebo',
};
