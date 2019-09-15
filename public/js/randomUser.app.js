// based off tom's example in class
var randomUser = new Vue({
  el: '#randomUserInfo',
  data: {
    person: {

    }
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {randomUser.person = json.results[0]})
      ;
    }
  },
  //what i want to have happen once vue instance is created
  created() {
    this.fetchUser();
  }
})
