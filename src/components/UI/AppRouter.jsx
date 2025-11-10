import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publiceRoutes } from "../../router/router";

const AppRouter = () => {
  const isAuth = false;
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
