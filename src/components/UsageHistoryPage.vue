<template>
  <div class="dashboard-page">  

    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>
        
        <div class="col-sm-9 main">
          <h1 class="page-header">Usage History</h1>

          <router-link to="/add-usage">
            <button class='float-btn btn btn-primary'>add new usage</button>
          </router-link>

          <div class="item">
            <label>Filter results by:</label>
            <select class="form-control">
              <option>Month</option>
              <option>Week</option>
              <option>Day</option>
            </select>
          </div>

          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>KITCHEN</th>
                  <th>BATHROOM</th>
                  <th>OUTDOORS</th>
                  <th>OTHER</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="noResultsFound">
                  <td rowspan="5">No results available yet...</td>
                </tr>
                <tr v-if="!noResultsFound" v-for="item in allData">
                  <td>{{item.date}}L</td>
                  <td>{{item.kitchen}}L</td>
                  <td>{{item.bathroom}}L</td>
                  <td>{{item.outdoors}}L</td>
                  <td>{{item.other}}L</td>
                  <td><div class="dot" v-bind:class="{ redBg: item.status }"></div></td>
                </tr>
              </tbody>
            </table>
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
  name: 'UsageHistoryPage',
  components: {
    Navigation,
    Sidebar
  },
  data () {
    return {
      allData: []
    }
  },
  created (){
    if(localStorage.getItem('main_data')){
      console.log(JSON.parse(localStorage.getItem('main_data')))
      this.noResultsFound = false;
      this.allData = JSON.parse(localStorage.getItem('main_data'));
    }
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
.item { margin-bottom: 5%  }
  .item label, .item select {
    display: inline-block;
    width: 200px
  }
    .item label {
      width: 120px;
    }
.dot {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #4cae4c;
}
.redBg { background-color: red !important }    
</style>
