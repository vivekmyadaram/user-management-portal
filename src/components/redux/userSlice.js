import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
  editUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      let newUsers = action.payload.map((user, index) => {
        return {
          ...user,
          id: state.usersList.length + index + 1,
        };
      });
      state.usersList = [...state?.usersList, ...newUsers];
    },
    userEdit: (state, action) => {
      state.editUser = state.usersList?.find((u) => u.id == action.payload);
    },
    onEditUserChange(state, action) {
      const { name, value } = action.payload;
      state.editUser[name] = value;
    },
    onEditUserUpdate(state) {
      const user = state.usersList.find(
        (item) => item.id === state.editUser.id
      );
      user.role = state.editUser.role;
      user.email = state.editUser.email;
      user.password = state.editUser.password;
    },
    userDelete: (state, action) => {
      const filtered = state.usersList?.filter((u) => u.id !== action.payload);
      state.usersList = filtered;
    },
  },
});

export const {
  userAdd,
  userEdit,
  userDelete,
  onEditUserChange,
  onEditUserUpdate,
} = userSlice.actions;
export default userSlice.reducer;
