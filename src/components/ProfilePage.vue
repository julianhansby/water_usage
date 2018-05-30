<template>
  <div class="profile-page">
    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>

        <div class="col-sm-9 main">

          <h1 class="page-header">Profile Details</h1>

          <div class="row placeholders">

            <p>form here</p>

            <hr>

            <button v-on:click="updateData()" type="submit" class="btn btn-default">Submit</button>



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
/*
 * Main content
 */

.main { padding: 20px }

  @media (min-width: 768px) {
    .main {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  .main .page-header {
    margin-top: 0;
  }

/*
 * Placeholder dashboard ideas
 */

.placeholders {
  margin-bottom: 30px;
}
  .placeholders h4 {
    margin-bottom: 0;
  }

.placeholder {
  margin-bottom: 20px;
}
  .placeholder img {
    display: inline-block;
    border-radius: 50%;
  }
</style>
