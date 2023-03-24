import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* WebpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage' /* WebpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* WebpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() => import('./Cast/Cast' /* WebpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* WebpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
