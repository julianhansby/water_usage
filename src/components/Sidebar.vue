<template>
	<div class="col-sm-3 col-md-3 sidebar">
		<p class="today-date">Todays date: <strong>{{todaysDate}}</strong></p>
	  <ul class="nav nav-sidebar">
	    <li class="active">
	    	<router-link tag="a" to="/dashboard">
	    		<i class="fas fa-home"></i> Overview
	    	</router-link>
	    </li>
	    <li>
				<router-link tag="a" to="/add-usage">
					<i class="fas fa-plus-circle"></i> Add New Usage
				</router-link>
			</li>
	    <li>
	    	<router-link tag="a" to="/history">
	    		<i class="fas fa-history"></i> Usage History
	    	</router-link>
	    </li>
	    <li>
	    	<router-link tag="a" to="/goals">
	    		<i class="far fa-calendar-plus"></i> Set Usage Goals
	    	</router-link>
	    </li>
	  </ul>
	  <label><i class="fas fa-tachometer-alt"></i> Current monthly usage</label>
		<div class="progress">
			<div 
				class="progress-bar progress-bar-success" 
				role="progressbar" 
				aria-valuenow="0" 
				aria-valuemin="0" 
				aria-valuemax="100" 
				v-bind:style="{ width: currMonthlyVal + '%' }">
			  {{currMonthlyVal}}%
			</div>
		</div>
		<label><i class="fas fa-list-ul"></i> Usage Statuses</label>
    <div class="legend">
      <label class="green-dot"></label><span> inside your daily limit</span>
    </div>
    <div class="legend">
      <label class="red-dot"></label><span> over your daily limit</span>
    </div>
	</div>
</template>
<script>
import moment from 'moment'
export default {
	name: 'Sidebar',
	data () {
		return {
			currMonthlyVal: 0,
			todaysDate: moment().format("Do MMM YYYY")
		}
	},
	created (){
		this.currMonthlyVal = 60
	}
}
</script>
<style scope>
/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar { display: none }

  @media (min-width: 768px) {
    .sidebar {
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
      min-height: 550px;
    }
  }

/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
  .nav-sidebar > li > a {
    padding-right: 20px;
    padding-left: 20px;
  }
  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    color: #fff;
    background-color: #428bca;
  }

.legend {
}  

.green-dot, .red-dot {
	border-radius: 100%;
  width: 10px;
  height: 10px;
  position: relative;
  top: 5px;
}

.green-dot { background-color: #4cae4c }
.red-dot { background-color: red !important }

.today-date { font-size: 0.8em }
</style>