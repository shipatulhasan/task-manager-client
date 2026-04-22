import App from "@/App";
import {createBrowserRouter} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: App,
    children: [
      {
        // path: "/tasks",
        index: true,
        Component: () => <div>Tasks</div>
      }
    ]
  },
]);

export default router;