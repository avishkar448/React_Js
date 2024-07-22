import React from 'react'
import { useSelector } from 'react-redux' 
// import { changeTheme } from '../features/myTheme/themeSlice'

const ThemeChange = () => {
    const themeName=useSelector( (state) => state.themeChanger.theme)
    // const [theme,setTheme]=useState()
    // const dispatch =useDispatch()
  return (
    <div>
      <button>{themeName}</button>
    </div>
  )
}

export default ThemeChange
