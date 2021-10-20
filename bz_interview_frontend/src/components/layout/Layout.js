import {CssBaseline, ThemeProvider} from '@material-ui/core';
import { siteTheme } from './siteTheme.js';

function Layout(props) {
  return <>
    <ThemeProvider theme={siteTheme}>
      <CssBaseline />
      <main>
        {props.children}
      </main>
    </ThemeProvider>
  </>
}

export default Layout;