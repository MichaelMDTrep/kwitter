import axios from "axios";
const text = "text";
class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }

  async getUserInfo(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      console.log("getUserInfo" + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async getUserPicture(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}/picture`);
      console.log("getUserPicture: " + result);
      // can't use result
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async setUserPicture(photo, username) {
    try {
      //sending the wrong data
      const result = await this.axiosInstance.put(
        `/users/${username}/picture`,
        photo
      );
      console.log("setUserPicture" + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async createUser({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      console.log("createUser" + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
  async updateProfile({ password, about, displayName, username }) {
    try {
      console.log({ password, about, displayName, username });
      const result = await this.axiosInstance.patch(`/users/${username}`, {
        password,
        about,
        displayName,
      });
      console.log("updateProfile's result:" + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async messagesIn() {
    try {
      const result = await this.axiosInstance.get(
        "/messages?limit=100&offset=0"
      );
      console.log("messages: " + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async deleteProfile(username) {
    try {
      console.log("out: " + username);
      const result = await this.axiosInstance.delete(`/users/${username}`);
      console.log(result);
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async messagesOut(messageText) {
    try {
      console.log(messageText);
      const result = await this.axiosInstance.post("/messages", {
        text: messageText,
      });
      console.log("messageOut: " + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async like(messageid) {
    try {
      console.log("messageid=" + messageid);
      const result = await this.axiosInstance.post("/likes", messageid);
      console.log("result" + JSON.stringify(result));
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async removeLike(likeId) {
    try {
      console.log("sent data:" + likeId);
      const result = await this.axiosInstance.delete(`/likes/${likeId}`);
      console.log(result);
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll vince pew pew lazer beams
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}
export default new API();
