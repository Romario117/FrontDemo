<template>
  <div class="row">
    <img src="../assets/logo.png">
    <div class="col-sm-4">
      <h2> Login</h2>
      <form @submit.prevent="LoginData">
        <div class="form-group">
          <label>Email</label>
          <input type="text" v-model="usuario.username" class="form-control" placeholder="Email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="usuario.password" class="form-control" placeholder="Password">
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import UsuarioService from '@/service/UsuarioService'

export default {
  name: 'Registation',
  data () {
    return {
      result: {},
      usuario: {
        username: '',
        password: ''
      }
    }
  },
  usuarioService: null,
  created () {
    this.usuarioService = new UsuarioService()
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    LoginData () {
      this.usuarioService.login(this.usuario)
        .then(
          ({ data }) => {
            console.log(data.mensaje)
            try {
              if (data.mensaje === 'Exitoso') {
                this.$router.push({ name: 'Dashboard' })
              } else {
                alert('Incorrect Email and Password not match')
              }
            } catch (err) {
              alert('Error, please try again')
            }
          }
        )
    }
  }
}
</script>
