<template >

  <section class="src-components-vista-usuarios">
        <div class="jumbotron m-3">
      <h1>Lista de Usuarios</h1>
      <hr>     

      <div  v-if="hayUsuarios==0" class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div> 
      
      <table class="table" v-else-if="hayUsuarios==1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Correo Electrónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in this.$store.state.contactos" :key="index">
            <td scope="row">{{ usuario.id }}</td>
            <td>{{usuario.nombre | pasarAminuscula | primeraMayuscula}}</td>
            <td>{{usuario.apellido |  pasarAminuscula | primeraMayuscula}}</td>
            <td>{{usuario.edad}}</td>
            <td>{{usuario.email |  pasarAminuscula | primeraMayuscula}}</td>
            <td> <button class="btn btn-danger" @click="borrar(usuario.id)">X</button> </td>
          </tr>
        </tbody>

      </table>     

      <div v-else class="alert alert-danger">
        NO HAY USUARIOS
      </div>




    </div>
  </section>

</template>

<script lang="js">
import { urlUsuarios } from '../urls'
  export default  {
    name: 'src-components-vista-usuarios',
    props: [],
    mounted () {
      this.getUsuarios()
      console.log(this.usuarios)
    },
    data () {
      return {
        hayUsuarios: 0       
      }
    },
    methods: {
            getUsuarios() {
        this.axios.get(urlUsuarios)
        .then( res => {
          console.log(res.data)
          this.$store.dispatch('getContactos', res.data)
          this.usuarios = res.data
          if(this.$store.state.contactos != 0){
            this.hayUsuarios = 1  
          }else{
            this.hayUsuarios = 2
          }          
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)

        })
      },
      borrar(id) {
        this.axios.delete(urlUsuarios+id)
        .then( res => {
          console.log(res.data)    
          this.$store.dispatch('borrarContacto')      

          if(this.$store.state.contactos == 0){
            this.hayUsuarios = 2
          }
        })
        .catch(error => {
          console.log('ERROR DELETE HTTP', error)
        })
      }  
    
    },
    
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-vista-usuarios {

  }
</style>
