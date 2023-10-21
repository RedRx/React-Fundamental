import React, { useState } from "react";
import DataContext from "./utils/context-api";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { createBrowserRouter, Link } from "react-router-dom";
import Contact from "./contact";
import Notfound from "./notfound";

//dynamic routing
import UserPage from "./user.jsx";

//hooks demo
import State from "./hooks-demo/State";
import Effect from "./hooks-demo/Effect";
import Callback from "./hooks-demo/Callback";
import Memo from "./hooks-demo/Memo";
import Ref from "./hooks-demo/Ref";

//Class test
import ClassTest from "./hooks-demo/ClassTest";

//Custom hooks
import useDetectDimension from "./useDetectDimension";

// Api Request and Response
import ApiDemo from "./api";
import ApiDemo2 from "./api-btn";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Link to="about">About Us</Link>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
        <Link to="/">Home</Link>
      </div>
    ),
  },
  {
    path: "/user/:id",
    element: <UserPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/hook-demo/state",
    element: <State />,
  },
  {
    path: "/hook-demo/effect",
    element: <Effect />,
  },
  {
    path: "/hook-demo/callback",
    element: <Callback />,
  },
  {
    path: "/hook-demo/memo",
    element: <Memo />,
  },
  {
    path: "/hook-demo/ref",
    element: <Ref />,
  },
  {
    path: "/class",
    element: <ClassTest />,
  },
  {
    path: "/api",
    element: <ApiDemo />,
  },
  {
    path: "/api2",
    element: <ApiDemo2 />,
  },
  {
    path: "*",
    element: (
      <>
        <Notfound />
      </>
    ),
  },
]);

export function RootComponent() {
  const [globalData, setGlobalData] = useState({
    name: "Beary",
    email: "teerapat.tech@gmail.com",
    phone: "123-456-7890",
  });

  const { width, height } = useDetectDimension();

  return (
    <React.StrictMode>
      <DataContext.Provider
        value={{ data: globalData, setData: setGlobalData }}
      >
        <RouterProvider router={router} />
      </DataContext.Provider>

      <footer className="absolute bottom-0 left-0 p-3 text-xl text-gray-500">
        Width: {width} x Height: {height}
      </footer>
    </React.StrictMode>
  );
}
