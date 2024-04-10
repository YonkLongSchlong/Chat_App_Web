const getTokenFromSessionStorage = sessionStorage.getItem("token")
  ? JSON.parse(sessionStorage.getItem("token"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromSessionStorage !== null ? getTokenFromSessionStorage : ""
    }`,
    Accept: "application/json",
  },
  
};