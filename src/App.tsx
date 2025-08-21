
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import MainContent from './layout/MainContent'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
   <div className='min-h-screen flex flex-col'>
    <header>
      <Navbar />
    </header>
    <div className="flex flex-1">
        {/* Sidebar */}
      
          <Sidebar />
      
      <MainContent  />
   </div>
   </div>
    </ThemeProvider>
   
  )
}

export default App
