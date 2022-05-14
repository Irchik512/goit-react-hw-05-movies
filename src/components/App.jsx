import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* WebpackChunkName: "home-page" */).then(
    module => ({ default: module.HomePage })
  )
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* WebpackChunkName: "movies-page" */).then(
    module => ({ default: module.MoviesPage })
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* WebpackChunkName: "movie-details-page" */
  ).then(module => ({ default: module.MovieDetailsPage }))
);
const Cast = lazy(() =>
  import('./Cast' /* WebpackChunkName: "cast" */).then(module => ({
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews' /* WebpackChunkName: "reviews" */).then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Suspense fallback="">
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
    </Suspense>
  );
};
