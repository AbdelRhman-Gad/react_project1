import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFoundPage/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  let Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
