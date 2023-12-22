import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@/shared/ui/spinner/spinner";
import { Header } from "@/widgets/header";

const Main = lazy(() => import('@/pages/main'));
const Signin = lazy(() => import('@/pages/signin'));
const Signup = lazy(() => import('@/pages/signup'));
const Search = lazy(() => import('@/pages/search'));
const History = lazy(() => import('@/pages/history'));
const Favorites = lazy(() => import('@/pages/favorites'));
const Profile = lazy(() => import('@/pages/profile'));
const Book = lazy(() => import('@/pages/book'));

export const Routing = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="search" element={<Search/>} />
          <Route path="history" element={<History/>} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="/book/:type/:id" element={<Book/>} />
      </Routes>
    </Suspense>
  );
};