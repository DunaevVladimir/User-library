import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@/shared/ui/spinner/spinner";
import { useDispatch } from 'react-redux';
import { setUser } from "@/entities/session";

const Main = lazy(() => import('@/pages/main'));
const Signin = lazy(() => import('@/pages/signin'));
const Signup = lazy(() => import('@/pages/signup'));
const Search = lazy(() => import('@/pages/search'));
const History = lazy(() => import('@/pages/history'));
const Favorites = lazy(() => import('@/pages/favorites'));
const Profile = lazy(() => import('@/pages/profile'));

export const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem('currentUser');
    if (user) {
      dispatch(setUser({email: user}));
    }
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="search" element={<Search/>} />
          <Route path="history" element={<History/>} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="profile" element={<Profile/>} />
      </Routes>
    </Suspense>
  );
};