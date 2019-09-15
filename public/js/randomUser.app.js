var randomUser = new Vue({
  el: '#randomUserInfo',
  data: {
    person: {
      name: {
        first: '',
        last: ''
      },
      email: '',

      dob: {
        date: '',
        age:''
      },
      picture: {
        large: '',
        medium: '',
        thumbnail: ''
      },
      nat: ''
    },
    patients:
    [
    ]
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {randomUser.person = json.results})
      ;
    }
  },
  //what i want to have happen once vue instance is created
  created() {
    this.fetchUser();
  }
})
