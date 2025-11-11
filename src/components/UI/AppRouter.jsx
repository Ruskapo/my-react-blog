import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publiceRoutes } from "../../router/router";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import Loader from "./Loader/Loader";
const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader/>
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}

      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publiceRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          
        />
      ))}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
