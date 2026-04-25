import MainLayout from "@/components/layout/mainLayout";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: MainLayout,
    children: [
      {
        // path: "/tasks",
        index: true,
      Component:Tasks
      },
      {
        path: "/tasks",
        Component:Tasks
      }
    ]
  },
]);

export default router;