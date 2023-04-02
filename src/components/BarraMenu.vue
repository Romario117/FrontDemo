<template>
    <div>
        <div>
            <MyMenu :model="items" />
        </div>
        <div>
            <Dashboard :key="renderComponent" />
        </div>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      renderComponent: 0,
      items: [
        {
          label: 'Archivos',
          icon: 'pi pi-fw pi-file'
        },
        {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-user-plus'
        },
        {
          label: 'Actualizar Tabla',
          icon: 'pi pi-fw pi-refresh',
          command: () => {
            console.log('Boton')
            this.renderComponent += 1
          }
        },
        {
          label: 'Salir',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            this.$router.push({name: 'Login'})
          }
        }
      ]
    }
  }
}
</script>

<style></style>
