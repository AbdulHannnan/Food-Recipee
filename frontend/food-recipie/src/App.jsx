import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './components/Login'; // adjust path if needed
import Signup from './components/Signup';
import AddFoodRecipie from './pages/addFoodRecipie';
import axios from "axios";

const gettAllRecipies = async () => {
  let allRecipies = [];
  await axios.get('http://localhost:5000/recipie/').then(res => {
    allRecipies = res.data;
  });
  return allRecipies;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />, loader: gettAllRecipies },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "addFoodRecipie", element: <AddFoodRecipie /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
