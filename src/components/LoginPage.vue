<template>
  <div class="login-page">
    <img src="../assets/img/logo.png">
    <form class="form-signin" @submit="checkLogin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <p v-if="errors.length" class="error">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>      
      <label for="username" class="sr-only">Username</label>
      <input 
        v-model="username"
        type="text"
        name="username" 
        id="username" 
        class="form-control" 
        placeholder="Username" 
        required 
        autofocus>
      <label for="password" class="sr-only">Password</label>
      <input 
        v-model="password"
        type="password" 
        name="password" 
        id="inputPassword" 
        class="form-control" 
        placeholder="Password" 
        required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      errors: [],
      username: null,
      password: null
    }
  },
  created (){
    if(JSON.parse(localStorage.getItem('user_set')) == true){
      this.$router.push('/dashboard');
    }
  },
  methods: {
    checkLogin: function (e) {
      if(this.username == 'johndoe' && this.password == 'password10'){
        JSON.stringify(localStorage.setItem('user_set',true));
        this.$router.push('/dashboard');
        return true
      }
      this.errors = [];
      if(!this.username) this.errors.push("Username required.");
      if(!this.password) this.errors.push("Password required.");
      if(this.username != 'johndoe') this.errors.push("Username is incorrect.");
      if(this.password != 'password10') this.errors.push("Password is incorrect.");      
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-page {
  text-align: center;
  padding: 5% 0;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
    .form-signin .form-control:focus {
      z-index: 2;
    }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
