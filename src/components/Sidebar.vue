<template>
	<div class="col-sm-3 col-md-2 sidebar">
	  <ul class="nav nav-sidebar">
	    <li class="active">
	    	<router-link tag="a" to="/dashboard">
	    		<i class="fas fa-home"></i> Overview <span class="sr-only">(current)</span>
	    	</router-link>
	    </li>
	    <li>
				<router-link tag="a" to="/add-usage">
					<i class="fas fa-plus-circle"></i> Add New Usage
				</router-link>
			</li>
	    <li><a href="#"><i class="fas fa-history"></i> Usage History</a></li>
	    <li><a href="#"><i class="far fa-calendar-plus"></i> Set Usage Goals</a></li>
	  </ul>
	  <label><i class="fas fa-tachometer-alt"></i> Current monthly usage (Litres)</label>
		<div class="progress">
		<div 
			class="progress-bar" 
			role="progressbar" 
			aria-valuenow="0" 
			aria-valuemin="0" 
			aria-valuemax="100" 
			v-bind:style="{ width: currMonthlyVal + '%' }">
		  {{currMonthlyVal}}%
		</div>
		</div>	  
	</div>
</template>
<script>
	export default {
		name: 'Sidebar',
		data () {
			return {
				currMonthlyVal: 0
			}
		},
		created (){
			if(localStorage.getItem('monthly_usage')){
				this.currMonthlyVal = parseInt(JSON.parse(localStorage.getItem('monthly_usage')),10)
			}
			//alert('yo yo yo');
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
      position: fixed;
      top: 51px;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
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
</style>