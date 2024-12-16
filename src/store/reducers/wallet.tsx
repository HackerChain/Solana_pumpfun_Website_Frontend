/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "../../utils/api";
import { dispatch } from "../index";

// types
import { walletStateProps } from "../../types/wallet";

// ----------------------------------------------------------------------

const initialState: walletStateProps = {
  error: null,
  user: {
    _id: "",
    username: "",
    totalPoint: 0,
    balance: 0,
    energy: 0,
    tap: 1,
    limit: 1000,
    level: 1,
    passItemLevel: 0,
    passItemStartTime: 0,
    lastTime: 0,
    dailyEarnTime: 0,
  },
  friend: false,
  users: [],
};

const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USER
    getWalletSuccess(state, action) {
      state.user = action.payload;
    },
    getUsersSuccess(state, action) {
      state.users = action.payload;
    },
    addWalletSuccess(state, action) {
      state.user = action.payload;
    },
    updateWalletSuccess(state, action) {
      state.user = action.payload;
    },
    addFriendSuccess(state, action) {
      state.friend = action.payload;
    },
  },
});

// Reducer
export default wallet.reducer;

// ----------------------------------------------------------------------

export function getWallet(username: string) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/${username}`);
      if (response.status === 200) {
        dispatch(wallet?.actions?.getWalletSuccess(response?.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}

export function insertWallet(username: string) {
  // console.log("insertWallet function =>", username);
  return async () => {
    try {
      const response = await axios.post("/wallet/add", {
        username: username,
      });
      if (response.status === 200)
        dispatch(wallet?.actions?.addWalletSuccess(response?.data));
    } catch (error) {
      console.log(error);
      // dispatch(wallet?.actions?.hasError(error));
    }
  };
}
export function updateWallet(
  username: string,
  totalPoint: number,
  balance: number,
  energy: number
) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/update/${username}`, {
        totalPoint: totalPoint,
        balance: balance,
        energy: energy,
      });
      // console.log(response);
      dispatch(wallet?.actions?.updateWalletSuccess(response?.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}
export function updateEnergy(username: string, energy: number) {
  // console.log("updateEnergy function", energy);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateEnergy/${username}`, {
        energy: energy,
      });
      dispatch(wallet?.actions?.updateWalletSuccess(response?.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}
export function updateTap(username: string, tap: number) {
  // console.log("------>", tap);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateTap/${username}`, {
        tap: tap,
      });
      dispatch(wallet?.actions?.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}

export function buyBonusCard(username: string, token: number) {
  // console.log("buyBonusCard =>");
  return async () => {
    try {
      const response = await axios.post(`/wallet/buyBonusCard/${username}`, {
        passItemLevel: 1, // tap: tap,
        token: token,
      });
      dispatch(wallet?.actions?.updateWalletSuccess(response?.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}

export function updateLimit(username: string, limit: number) {
  // console.log("------>", limit);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateLimit/${username}`, {
        limit: limit,
      });
      dispatch(wallet?.actions?.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}
export function updateBalance(username: string, balance: number) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateBalance/${username}`, {
        balance: balance,
      });
      dispatch(wallet?.actions?.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}
export function addFriend(username: string) {
  return async () => {
    try {
      await axios.post(`/wallet/${username}`);
      dispatch(wallet?.actions?.addFriendSuccess(true));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.addFriendSuccess(false));
    }
  };
}
export function getAllUsers() {
  // console.log("getAllUsers function => called");
  return async () => {
    try {
      const response = await axios.get("/wallet/all");
      dispatch(wallet?.actions?.getUsersSuccess(response?.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet?.actions?.hasError(error));
    }
  };
}
