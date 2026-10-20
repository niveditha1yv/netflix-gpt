import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./components/Browser";
import Login from "./components/Login";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default Body;
