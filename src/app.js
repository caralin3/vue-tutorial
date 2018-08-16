// base Url of the API
const baseUrl = "http://jsonplaceholder.typicode.com";

// List Component
const List = {
  template: '#list-template',
  data: () => ({
    posts: [],
    search: ''
  }),
  computed: {
    filteredPosts() {
      return this.posts.filter(post => (
        post.tile.includes(this.search)
      ))
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    // You are issuing a GET request to the /posts route on the base URL that we defined at the top of the file.
    // If successful, you assign posts the data that was returned in the response.
    // Otherwise, the error is logged to the console.
    getPosts() {
      axios.get(`${baseUrl}/posts`).then(response => {
        this.posts = response.data
        console.log(this.posts)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

// Post Component
const Post = {
  template: '#post-template',
  data: () => ({
    post: null
  }),
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      const id = this.$route.params.id
      axios.get(`${baseUrl}/posts/${id}`).then(response => {
        this.post = response.data
        console.log(this.post)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

// Create Vue Router
const router = new VueRouter({
  // Setting the mode to history prevents your URLs from having
  // a # sign at the end, and instead look like “normal” URLs.
  mode: 'history',
  routes: [{
      name: 'homepage',
      path: '/',
      component: List
    }, {
      name: 'post',
      path: '/:id',
      component: Post
    }
  ]
})

const vue = new Vue({router})
const app = vue.$mount('#app')
