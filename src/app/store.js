import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/count/countSlice'
import infoReducer from '../features/info/infoSlice'
import themeReducer from '../features/myTheme/themeSlice'

export const store=configureStore({ 
    reducer:{ 
        counter:countReducer,
        information:infoReducer,
        themeChanger:themeReducer,
    }
})