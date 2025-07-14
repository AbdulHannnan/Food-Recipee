import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout'; // or wherever you saved Layout
import axios from "axios";

const gettAllRecipies=async()=>{
  let allRecipies=[]
  await axios.get('http://localhost:5000/recipie/').then (res =>{
    allRecipies=res.data
  })
  return allRecipies;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />, loader : gettAllRecipies  } // homepage inside Layout
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
