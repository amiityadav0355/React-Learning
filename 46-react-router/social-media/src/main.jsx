import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import PostList, { postLoader } from "./components/PostList.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      { path: "/create-post", element: <CreatePost />, action:createPostAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
