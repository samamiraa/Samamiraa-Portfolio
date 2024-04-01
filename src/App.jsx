import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

{/** sets theme to material UI dark theme */}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

{/** ensures every page has the header and footer */}
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div className='appJsx'>
          <Header />
          <Outlet />
          <Footer />
        </div>
    </ThemeProvider>
  );
}


export default App;