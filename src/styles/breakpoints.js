const size = {
  tablet: '768px',
  tabletLandscape: '1200px',
  desktop: '1400px',
  desktopLarge: '1600px',
  desktopXLarge: '1800px',
 }
 
const device = {
  tablet: `(min-width: ${size.tablet})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
  desktopXLarge: `(min-width: ${size.desktop})`
 }
 
 /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
 export default {size, device}