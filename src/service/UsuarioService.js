import axios from 'axios'

export default class UsuarioService {
    url = 'http://localhost:8081/api/v1/'
    getAll () {
      return axios.get(this.url + 'usuarios')
    }
    login (usuario) {
      return axios.post(this.url + 'login', this.usuario)
    }
}
