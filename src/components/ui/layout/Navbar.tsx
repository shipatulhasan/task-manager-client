import { LogoDark, LogoWhite } from "@/assets/icons"
import { ModeToggle } from "@/components/mode-toggler"
import { useTheme } from "@/providers/theme-provider"

const Navbar = () => {
  const {theme} = useTheme()
  return (
    <nav className="w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        {
          theme === "dark" ? <LogoDark /> : <LogoWhite />
        }
        <ModeToggle/>
      </div>
    </nav>
  )
}
export default Navbar