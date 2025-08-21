import { Link } from "react-router-dom"
import { useTheme } from "../Hooks/useTheme"
import { themes } from "../Styles/ThemeColors"


export default function Sidebar(){
    const {theme} = useTheme();
    return( <aside
      className="w-64 p-4"
      style={{
        backgroundColor: themes[theme].sidebar,
        color: themes[theme].text,
      }}
    >
        <ul className="">
            <li className="m-2" ><Link className="text-inherit text-lg font-semibold" to="/">Home</Link></li>
            <li className="m-2"><Link className="text-inherit text-lg font-semibold" to="/graph">Vikt karta</Link></li>
            <li className="m-2"><Link className="text-inherit text-lg font-semibold"  to="/recipes">Recept</Link></li>
            <li className="m-2"><Link className="text-inherit text-lg font-semibold" to="/workout">Träning</Link></li>
            
        </ul>
       
    </aside>
    )
}