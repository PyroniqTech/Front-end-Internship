import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export default function ThemeToggle(){
const { theme, setTheme } = useContext(ThemeContext)
return (
<button className="px-3 py-1 rounded border" onClick={()=> setTheme(theme === 'dark'? 'light' : 'dark')}>
{theme === 'dark' ? 'Light' : 'Dark'}
</button>
)
}
