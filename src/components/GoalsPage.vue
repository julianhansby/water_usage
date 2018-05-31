<template>
  <div class="dashboard-page">
   
    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>
        
        <div class="col-sm-9 main">
          <h1 class="page-header">Usage Goals</h1>

          <router-link to="/add-usage">
            <button class='float-btn btn btn-primary'>add new usage</button>
          </router-link>

          <div class="row placeholders text-center">

            <p>Here we can implement a star rate system, to encourage users to use water respectably (and possibly rewarded for it).</p>

            <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></p>

            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive bg-primary" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import Sidebar from './Sidebar'
export default {
  name: 'GoalsPage',
  components: {
    Navigation,
    Sidebar
  },
  data () {
    return {
      msg: 'This will be an app to track home water usage'
    }
  },
  created (){
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .float-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    text-transform: uppercase;
  }
</style>
