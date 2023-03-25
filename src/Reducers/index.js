const initialState = {
    userList: [],
    loggedinUser: null,
  };

const userSlice = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {
      signUp: (state, action) => {
        // state.users.push(action.payload);
        userList: [...state.userList, action.payload]
      },
      login: (state, action) => {
        state.currentUser = action.payload;
      },
    }
  });

export const { signUp, login } = userSlice.actions;
export default userSlice.reducer;