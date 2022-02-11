import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<div>Home page</div>}></Route>
          <Route path="/movie" element={<div>Movie page</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
