// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/navbar/Navbar";
import { HeroImageBackground } from "./components/Home/Home";
import AboutPage from "./components/about/About";
import Services from "./components/services/Services";
import Gallery from "./components/Gallery/Gallery";
import TestMonials from "./components/TestIMonials/TestIMonials";
import Team from "./components/Team/Team";
import Contact from "./components/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroImageBackground />,
    },
    {
      path: "/aboutpage",
      element: <AboutPage />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/testMonials",
      element: <TestMonials />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
