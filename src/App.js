import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';


import ScrollToTop from './components/scroll-to-top';

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
