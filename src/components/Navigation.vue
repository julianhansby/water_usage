<template>
 <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><i class="fas fa-tint"></i></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link tag="a" to="/profile">
              <i class="fas fa-user-circle"></i>
            </router-link>
          </li>
          <li><a v-on:click="signout()" href="#">Sign out</a></li>          
        </ul>
        <form class="navbar-form navbar-right">
          <input type="text" class="form-control" placeholder="Search...">
        </form>
      </div>
    </div>
  </nav>	
</template>
<script>
	export default {
		name: 'Navigation',
    methods: {
      signout: function () {
        alert('lets sign out mate!');
        localStorage.setItem('user_set',false);
        this.$router.push('/login');
      }
    }
	}
</script>
<style scope>
.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top { border: 0 }	
</style>