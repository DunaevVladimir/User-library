import { Route, Routes } from "react-router-dom";
import { Main } from "@/pages/main";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { Search } from "@/pages/search";
import { History } from "@/pages/history";
import { Favorites } from "@/pages/favorites";
import { Profile } from "@/pages/profile";

export const Routing = () => {
  return (
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="search" element={<Search/>} />
          <Route path="history" element={<History/>} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="profile" element={<Profile/>} />
      </Routes>
  );
};