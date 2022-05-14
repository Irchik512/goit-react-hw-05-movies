import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router';
import { Header } from 'components/Header';
import { Footer, Main, PositionWraper } from 'pages/Layout';

export const Layout = () => {
  return (
    <PositionWraper>
      <Header />
      <ToastContainer />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>Developed by Irchik512</p>
      </Footer>
    </PositionWraper>
  );
};
