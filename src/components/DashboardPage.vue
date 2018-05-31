<template>
  <div class="dashboard-page">

    <!-- Button trigger modal -->
    <button type="button" class="btn trigger-modal" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>      

    <!-- Modal -->
    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title text-danger" id="myModalLabel">WATER USAGE ALERT!</h4>
          </div>
          <div class="modal-body">
            <p>We see you are situated in Cape Town, South Africa. Please note that the city has implemented water restrictions which means residents may use a maximum 50 litres of water, per person, per day.</p>
            <p>This app will help you monitor your daily and monthly water usage.</p>
          </div>
          <div class="modal-footer">
            <button 
              type="button" 
              class="btn btn-danger" 
              data-dismiss="modal"
              v-on:click="setNoticeStatus()"
              >OK, Got It</button>
          </div>
        </div>
      </div>
    </div>    

    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>
        
        <div class="col-sm-9 main">
          <h1 class="page-header">Usage Overview Status</h1>

          <router-link to="/add-usage">
            <button class='float-btn btn btn-primary'>add new usage</button>
          </router-link>

          <div class="row placeholders">
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
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>

          <h2 class="sub-header">Usage History</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>KITCHEN</th>
                  <th>BATHROOM</th>
                  <th>OUTDOORS</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
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
  name: 'DashboardPage',
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
    if(JSON.parse(localStorage.getItem('notification')) == false){
      setTimeout(() => { $('.trigger-modal').trigger('click') },1300);
    } 
  },
  methods: {
    setNoticeStatus: function(){
      JSON.stringify(localStorage.setItem('notification',true));
    }
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
  .trigger-modal {
    width: 1px;
    height: 1px;
    color: #fff;
    background-color: #fff;
    border: none;
    margin-top: -12px;
    display: block;    
  }
  .dashboard-page .placeholders { text-align: center }
</style>
