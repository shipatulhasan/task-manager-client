import { Outlet } from "react-router";
import Navbar from "../ui/layout/Navbar";

export default function MainLayout() {
  return (
     <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
        </div>
    </div>
  )
}