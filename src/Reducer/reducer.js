import history from '../history';
const initialState = {
  isAuthenticated: localStorage.getItem("user") ? true : false,

  user: localStorage.getItem("user")
};
const parseJwt = token => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const Reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN":
      const token = action.payload.userInfo;
      const userInfo = parseJwt(token);
      localStorage.setItem("user", token);
      setTimeout(() => {
        window.location = "/login";
        localStorage.removeItem("user");
        alert("Session Timed Out...");
      }, Math.abs(new Date() - new Date(userInfo.exp * 1000)));
      return {
        ...state,
        isAuthenticated: true,
        user: userInfo
      };

    case "LOGOUT":
      localStorage.removeItem("user");
      history.push('/login');
      return {
        ...state,
        isAuthenticated: false
      };

    case "REGISTER":
      console.log(action.payload);

  }
  return { ...state };
};
export default Reducer;
