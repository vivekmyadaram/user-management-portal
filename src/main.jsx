import * as React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./components/redux/Store";
import App from "./components/App";
import AddUsers from "./components/AddUsers";
import EditUser from "./components/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-user",
    element: <AddUsers />,
  },
  {
    path: "/:id/edit-user",
    element: <EditUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
