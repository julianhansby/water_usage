<template>
  <div class="add-new-page">
    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <h1 class="page-header">Add New Usage</h1>

          <div class="row placeholders">

            <div class="item">
              <i class="fas fa-car"></i>
              <input 
                v-model="ranges.carRange" 
                v-on:change="rangeUpdater('car')" type="range" min="0" max="500" step="10" />
            </div>
            <div class="item">
              <i class="fas fa-utensils"></i>
              <input 
                v-model="ranges.dishesRange" 
                v-on:change="rangeUpdater('dishes')" type="range" min="0" max="500" step="10" />
            </div>
            <div class="item">
              <i class="fas fa-shower"></i>
              <input 
                v-model="ranges.showerRange" 
                v-on:change="rangeUpdater('shower')" type="range" min="0" max="500" step="10" />
            </div>

            <hr>

            <button v-on:click="updateData()" type="submit" class="btn btn-default">Submit</button>

            <p>Car Range: {{ranges.carRange}}</p>
            <p>Dishes Range: {{ranges.dishesRange}}</p>
            <p>Shower Range: {{ranges.showerRange}}</p>

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
  name: 'AddNewPage',
  components: {
    Sidebar,
    Navigation
  },
  data () {
    return {
      ranges: {
        carRange: 0,
        dishesRange: 0,
        showerRange: 0
      }
    }
  },
  methods: {
    rangeUpdater: function (what) {
      alert(what)
    },
    updateData: function (){
      let sum = parseInt(this.ranges.carRange) + parseInt(this.ranges.dishesRange) + parseInt(this.ranges.showerRange)
      localStorage.setItem('monthly_usage',JSON.stringify(sum));
      alert(sum)
    }    
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
