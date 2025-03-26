import { createBrowserRouter } from "react-router";
import { JSX, Suspense, lazy } from "react";

// Lazy loading components
const App = lazy(() => import("./App"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const StudentList = lazy(() => import("./pages/StudentListComponent"));

// Wrapper to add Suspense
const LazyWrapper = (Component: React.LazyExoticComponent<React.FC>): JSX.Element => {
  return (
    <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

// Define routes with lazy loading
const router = createBrowserRouter([
  {
    path: "/",
    element: LazyWrapper(App),
    children: [
      { path: "", element: LazyWrapper(Home) },
      { path: "home", element: LazyWrapper(Home) },
      { path: "studentList", element: LazyWrapper(StudentList) }
    ],
  },
  { path: "*", element: LazyWrapper(NotFound) },
]);

export default router;