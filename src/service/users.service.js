import axios from "axios";

export default class UserService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: process.env.REACT_APP_API_URL, /*"http://localhost:5000/api/users",*/
      withCredentials: true,
    });
  }

  getUsers = () => this.apiHandler.get("/users/getAllUsers");
  getUser = (userId) => this.apiHandler.get(`/users/getOneUser/${userId}`);
  saveUser = (userInfo) => this.apiHandler.post(`/users/newUser/`, userInfo);
  updateUser = (userId, userInfo) => this.apiHandler.put(`/users/editUser/${userId}`, userInfo)
  filterByInstrument = instrument => this.apiHandler.get(`/users/filterByInstrument/${instrument}`);
  deleteUser = (userId) => this.apiHandler.delete(`/users/deleteUser/${userId}`);
}
