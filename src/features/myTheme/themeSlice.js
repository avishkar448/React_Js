import {createSlice} from '@reduxjs/toolkit'

const initialState={ 
    theme:"light"
}

export const themeSlice=createSlice({ 
    name:"themeChanger",
    initialState,
    reducers:{ 
        changeTheme:(state,action)=>{ 
            state.theme=action.payload
        }
    }
})

export const{changeTheme}=themeSlice.actions

export default themeSlice.reducer