import DefaultTheme from './DefaultTheme'

const { colorsDefault, ...defaultConfigs } = DefaultTheme
const theme = {
  title: 'light',

  ...defaultConfigs,
  colors: {
    ...colorsDefault,
    text: '#435f84',
    background: '#f8fbff',
    backgroundSecondary: '#ffffff'
  }
}

export default theme
