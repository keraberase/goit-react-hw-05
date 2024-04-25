import "./App.css";

import { Routes, Route } from "react-router-dom";
import {lazy, Suspense } from "react";
import { Loader } from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";

const HomePage = lazy(() => import("../../components/pages/HomePage"));
const MoviesPage = lazy(() => import("../../components/pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../components/pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../components/pages/NotFoundPage"));
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
