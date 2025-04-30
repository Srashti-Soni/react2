import { useState ,useEffect} from 'react'


import './App.css'
import { ThemeProvider } from './Context/theme'
import Themebtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {
const [themeMode,setThememode]=useState("Light")
 const LightTheme=()=>{
  setThememode("Light")
 }
 const darkTheme=()=>{
  setThememode("dark")}
 // change the theme
 useEffect(()=>{
  document.querySelector("html").classList.remove("dark","light")
  document.querySelector("html").classList.add(themeMode)
 },[themeMode]) 
  return (
  <ThemeProvider value={{themeMode,darkTheme,LightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
      </div>
  </div></ThemeProvider>
)}

   export default App
