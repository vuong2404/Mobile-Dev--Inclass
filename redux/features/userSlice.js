import { createSlice } from "@reduxjs/toolkit";

const data = [
    {
        userName: "Nguyen van A",
        id: 123456,
        password: "12345678"
    },
    {
        userName: "Nguyen van A",
        id: 123456,
        password: "12345678"
    }
]
export const UserSlice= createSlice({
    name: "user",
    initialState: {
        userID: "",
        loading: false,
        error: false,
    },
    reducers: {
        login: (state, action) => {
            let userName = action.payload.userName ;
            let password = action.payload.password
            let user = data.find(item => item.userName === userName && item.password === password)
            if (user) {
                state.userID = user.id ;
                localStorage.setItem({"userID": state.userID})
            }
        }
    },
})

export default UserSlice.reducer;