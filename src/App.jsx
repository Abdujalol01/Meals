import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Navbar,Footer} from "./component"
import {About, Contact, FilterCategory, Main, NotFound, Recipe} from "./pages"
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound/>,
      children:[
        {
          path:"/",
          element:<Main/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/filter-category/:id",
          element:<FilterCategory/>
        },
        {
          path:"/recipe/:id",
          element:<Recipe/>
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
