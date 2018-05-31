<template>
  <div class="add-new-page">
    <Navigation></Navigation>

    <div class="container-fluid">
      <div class="row">

        <Sidebar></Sidebar>

        <!-- INITIAL SCREEN -->
        <div class="col-sm-9 main" v-if="!done">

          <h1 class="page-header">Add new daily usage item</h1>

          <div class="row placeholders">

            <div class="date-input">
              <label>Select a date: </label>
              <input type="date" class="form-control" v-model="selectedDate">
            </div>

            <div class="date-input">
              <label>Amount of people in dwelling: </label>
              <select class="form-control" v-model="peopleAmount" v-on:change="watchSliderVal">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>            

            <h4 class="text-center sub-header">Use the slide controls below to set your daily usage</h4>

            <div class="item col-md-3">
              <h5>Outdoors</h5>
              <i class="fas fa-car" v-bind:class="{ redBg: isOverboard}"></i>
              <input 
                v-model="ranges.outdoorsRange" 
                v-on:change="rangeUpdater('car')" type="range" min="0" :max="maxNumber" step="1" />
                <span>Litres: <strong>{{ranges.outdoorsRange}}</strong></span>
            </div>
            <div class="item col-md-3">
              <h5>Kitchen</h5>
              <i class="fas fa-utensils" v-bind:class="{ redBg: isOverboard}"></i>
              <input 
                v-model="ranges.kitchenRange" 
                v-on:change="rangeUpdater('dishes')" type="range" min="0" :max="maxNumber" step="1" />
                <span>Litres: <strong>{{ranges.kitchenRange}}</strong></span>
            </div>
            <div class="item col-md-3">
              <h5>Bathroom</h5>
              <i class="fas fa-shower" v-bind:class="{ redBg: isOverboard}"></i>
              <input 
                v-model="ranges.bathroomRange" 
                v-on:change="rangeUpdater('shower')" type="range" min="0" :max="maxNumber" step="1" />
                <span>Litres: <strong>{{ranges.bathroomRange}}</strong></span>
            </div>
            <div class="item col-md-3">
              <h5>Other Usage</h5>
              <i class="fas fa-question" v-bind:class="{ redBg: isOverboard}"></i>
              <input 
                v-model="ranges.otherRange" 
                v-on:change="rangeUpdater('shower')" type="range" min="0" :max="maxNumber" step="1" />
                <span>Litres: <strong>{{ranges.otherRange}}</strong></span>
            </div>            
            <button 
              v-on:click="updateData('save')" 
              type="submit" 
              class="btn btn-primary">SAVE CHANGES</button>
            <button 
              v-on:click="updateData('confirm')" 
              type="submit" 
              class="btn btn-success" v-if="confirm">CONFIRM CHANGES</button>
          </div>
        </div>

        <!-- THANK YOU / SHARE SCREEN -->
        <div class="col-sm-9 main" v-if="done">
          
          <h1 class="page-header">CONFIRMATION</h1>

          <div class="row placeholders text-center">
            <p>Your usage for the day has been captured!</p>
            <h3>Share your usage on Twitter</h3>
            <div class="social-media-share">
              <a :href="twitter_data_url" target="_blank">
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
            <br /><br />
            <router-link to="/add-usage">
              <button class="btn btn-primary">ADD NEW USAGE</button>
            </router-link>
            <router-link to="/dashboard">
              <button class="btn btn-primary">DASHBOARD</button>              
            </router-link>
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
      mainData: [],
      ranges: {
        outdoorsRange: 0,
        kitchenRange: 0,
        bathroomRange: 0,
        otherRange: 0
      },
      selectedDate: null,
      peopleAmount: null,
      maxNumber: 50,
      isOverboard: false,
      confirm: false,
      done: false,
      finalSum: 0,
      twitter_data_url: 'http://twitter.com/share?text=Hey Guys! I want to share my water usage for today'
    }
  },
  methods: {
    rangeUpdater: function (what) {
      this.calculateSum();
    },
    updateData: function (type){
      if(type == 'save'){
        if(this.selectedDate == null || this.peopleAmount == null){
          alert('You need to select a date and amount of people');
          return  
        }
        this.calculateSum();
        this.confirm = true;
      } else {
        this.done = true;
        this.twitter_data_url = `http://twitter.com/share?text=Hey Guys! My water usage for today was ${this.finalSum} Litres!&hashtags=SaveWater,CapeTownWaterAwareness`;

        // update main data array in local storage, to be used on other views
        this.mainData.push({
          date: this.selectedDate,
          kitchen: this.ranges.kitchenRange,
          outdoors: this.ranges.outdoorsRange,
          bathroom: this.ranges.bathroomRange,
          other: this.ranges.otherRange,
          status: this.isOverboard
        });
        localStorage.setItem('main_data',JSON.stringify(this.mainData));
        console.log(JSON.parse(localStorage.getItem('main_data')));
      }
    },
    calculateSum: function (){
      // first hide confirm button if showing
      this.confirm = false;

      let defaultVal = 50;
      let cachePeopleAmount = this.peopleAmount == null ? 1 : this.peopleAmount;
      let outdoors = parseInt(this.ranges.outdoorsRange,10);
      let kitchen = parseInt(this.ranges.kitchenRange,10);
      let bathroom = parseInt(this.ranges.bathroomRange,10);
      let other = parseInt(this.ranges.otherRange,10);
      let sum = outdoors + kitchen + bathroom + other;
      this.finalSum = sum;
      if(sum > (defaultVal * cachePeopleAmount)){
        alert('oopsie! you are going overboard here ne!!');
        this.isOverboard = true;
      } else { this.isOverboard = false }
    },
    watchSliderVal: function (){
      let defaultVal = 50;
      this.maxNumber = defaultVal * this.peopleAmount;
      this.calculateSum();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  text-align: center;
  margin: 0 0 8% 0;
}

  .item i {
    background-color: #4cae4c;
    font-size: 3em;
    border-radius: 100%;
    padding: 20px 22px;
    margin-bottom: 8%;    
  }

.redBg { background-color: red !important }

.date-input { margin: 0 0 10px 15px }
.date-input label, .date-input input, .date-input select { display: inline-block }
  .date-input label {
    width: 200px;
    text-align: right;
  }
  .date-input input, .date-input select { width: 200px }

.sub-header {
  margin: 6% 0 2% 0;
  border: none;
}
</style>
