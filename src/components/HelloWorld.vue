<template>
  <div>
    <div class="row">
      <div class="col-8">
        <MyMenuPrincipal />
      </div>
    </div>

    <div>
      <DataTable :value="usuarios" :paginator="true" :rows="5">
        <MyColumn field="nombre" header="Nombre"></MyColumn>
        <MyColumn field="apellidoP" header="ApellidPaterno"></MyColumn>
        <MyColumn field="apellidoM" header="Apellidaterno"></MyColumn>
      </DataTable>
    </div>
  </div>
</template>

<script>
import UsuarioService from '@/service/UsuarioService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      usuarios: null
    }
  },
  usuarioService: null,
  created () {
    this.usuarioService = new UsuarioService()
  },
  mounted () {
    this.usuarioService.getAll().then(data => {
      this.usuarios = data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
