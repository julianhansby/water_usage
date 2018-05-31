<template>
  <div class="profile-page">
    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>

        <div class="col-sm-9 main">

          <h1 class="page-header">Profile Details</h1>

          <div class="row placeholders">

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="John Doe" disabled>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">City</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Cape Town" disabled>
              </div>
              <button type="submit" class="btn btn-default" disabled>Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navigation from './Navigation'

export default {
  name: 'ProfilePage',
  components: {
    Sidebar,
    Navigation
  },
  data () {
    return {
      data: {
      }
    }
  },
  methods: {  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
