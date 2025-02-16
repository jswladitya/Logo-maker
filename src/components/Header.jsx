import { Download } from "lucide-react"
import { Button } from "./ui/button"

function Header() {
  return (
    <div className="p-3 shadow-sm border flex justify-between items-center">
      <p className="text-slate-800 text-2xl font-bold">Logomaker</p>
      <Button> <Download/> Download</Button>
    </div>
  )
}

export default Header
