import axios from "axios";

let BASE_URL = '"http://localhost:3001"'

class ApiRequest {

  static async sendMessage(data) {
    const resp = await axios.post('http://localhost:3001/message/submit', data)
    return resp
  }

}

export default ApiRequest;