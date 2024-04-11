// const getTokenFromSessionStorage = sessionStorage.getItem("token")
const getTokenFromSessionStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromSessionStorage !== null ? getTokenFromSessionStorage : ""
    }`,
    Accept: "application/json",
  },
  
};