import { LogoWhite } from "@/assets/icons"

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <LogoWhite />
      </div>
    </nav>
  )
}
export default Navbar