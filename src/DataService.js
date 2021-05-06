import axios from "axios";


export default class DataService {
  getAll() {
    return axios.get("http://localhost:8081/api/teste")
      .then((response) => {
        return response.data;
      })
    }
}
