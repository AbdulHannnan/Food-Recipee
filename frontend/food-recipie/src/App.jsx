import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout'; // or wherever you saved Layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> } // homepage inside Layout
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
