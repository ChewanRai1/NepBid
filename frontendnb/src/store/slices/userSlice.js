import api from "../../utils/api";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    leaderboard: [],
  },
  reducers: {
    registerRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    loginRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    fetchUserRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    fetchUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },

    logoutSuccess(state, action) {
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = state.isAuthenticated;
      state.user = state.user;
    },
    fetchLeaderboardRequest(state, action) {
      state.loading = true;
      state.leaderboard = [];
    },
    fetchLeaderboardSuccess(state, action) {
      state.loading = false;
      state.leaderboard = action.payload;
    },
    fetchLeaderboardFailed(state, action) {
      state.loading = false;
      state.leaderboard = [];
    },
    clearAllErrors(state, action) {
      state.user = state.user;
      state.isAuthenticated = state.isAuthenticated;
      state.leaderboard = state.leaderboard;
      state.loading = false;
    },
  },
});

// export const register = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4444/api/v1/user/register",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     dispatch(userSlice.actions.registerSuccess(response.data));
//     toast.success(response.data.message);
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.registerFailed());
//     toast.error(error.response.data.message);
//     dispatch(userSlice.actions.clearAllErrors());
//   }
// };

export const register = (data) => async (dispatch) => {
  dispatch(userSlice.actions.registerRequest());
  try {
    const response = await api.post("/user/register", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(userSlice.actions.registerSuccess(response.data));
    toast.success(response.data.message);
    // Immediately fetch user data after successful registration
    dispatch(fetchUser());
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.registerFailed());
    toast.error(error.response?.data?.message || "Registration failed");
    dispatch(userSlice.actions.clearAllErrors());
  }
};

// export const login = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4444/api/v1/user/login",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(userSlice.actions.loginSuccess(response.data));
//     toast.success(response.data.message);
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.loginFailed());
//     toast.error(error.response.data.message);
//     dispatch(userSlice.actions.clearAllErrors());
//   }
// };

export const login = (data) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());
  try {
    const response = await api.post("/user/login", data);
    dispatch(userSlice.actions.loginSuccess(response.data));
    toast.success(response.data.message);
    // Immediately fetch user data after successful login
    dispatch(fetchUser());
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.loginFailed());
    toast.error(error.response?.data?.message || "Login failed");
    dispatch(userSlice.actions.clearAllErrors());
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:4444/api/v1/user/logout",
      { withCredentials: true }
    );
    dispatch(userSlice.actions.logoutSuccess());
    toast.success(response.data.message);
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.logoutFailed());
    toast.error(error.response.data.message);
    dispatch(userSlice.actions.clearAllErrors());
  }
};

// export const fetchUser = () => async (dispatch) => {
//   dispatch(userSlice.actions.fetchUserRequest());
//   try {
//     const response = await axios.get("http://localhost:4444/api/v1/user/me", {
//       withCredentials: true,
//     });
//     dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.fetchUserFailed());
//     dispatch(userSlice.actions.clearAllErrors());
//     console.error(error);
//   }
// };

// export const fetchUser = () => async (dispatch) => {
//   dispatch(userSlice.actions.fetchUserRequest());
//   try {
//     const response = await api.get('/user/me');
//     if (response.data.success) {
//       dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
//     } else {
//       dispatch(userSlice.actions.fetchUserFailed());
//     }
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.fetchUserFailed());
//     if (error.response) {
//       // Only show error toast if it's not an auth error
//       if (error.response.status !== 401) {
//         toast.error(error.response.data.message || 'Failed to fetch user data');
//       }
//     }
//     dispatch(userSlice.actions.clearAllErrors());
//   }
// };

export const fetchUser =
  (suppressAuthToast = false) =>
  async (dispatch) => {
    dispatch(userSlice.actions.fetchUserRequest());
    try {
      const response = await api.get("/user/me");
      if (response.data.success) {
        dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
      } else {
        dispatch(userSlice.actions.fetchUserFailed());
      }
      dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(userSlice.actions.fetchUserFailed());
      if (error.response) {
        // Suppress toast for unauthenticated users during initialization
        if (error.response.status === 401 && suppressAuthToast) {
          return;
        }
        toast.error(error.response.data.message || "Failed to fetch user data");
      }
      dispatch(userSlice.actions.clearAllErrors());
    }
  };

export const fetchLeaderboard = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchLeaderboardRequest());
  try {
    const response = await axios.get(
      "http://localhost:4444/api/v1/user/leaderboard",
      {
        withCredentials: true,
      }
    );
    dispatch(
      userSlice.actions.fetchLeaderboardSuccess(response.data.leaderboard)
    );
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.fetchLeaderboardFailed());
    dispatch(userSlice.actions.clearAllErrors());
    console.error(error);
  }
};

export default userSlice.reducer;
