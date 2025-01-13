import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {User, getUser} from "@/api/auth";

interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: {
        id: null,
        username: '',
        image: '',
        email: '',
    }
}

export const fetchUser = createAsyncThunk('user/fetchUser',
    async (token: string) => {
        const response = await getUser(token)
        return response.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
});

export default userSlice.reducer;