 // static posts Vue component
Vue.component('static-posts', {

  // setting the template that this component will use to render
  // references the template with id static-posts-template in your markup.
  template: '#static-posts-template',

  // Components are capable of managing their own data internally
  // the data function is where we define all the variables this component will need
  // in this specific case, we only need to worry about an array of post
  data: () => ({
    posts: []
  }),

  // this is called whenever this component is mounted onto the DOM
  // basically whenever we want to show all the posts, we go and get them
  mounted() {
    this.getPosts();
  },

  // this is where you define all the methods this component needs
  methods: {
    // getPost simply sets the 'posts' variable with static data
    getPosts() {
      this.posts = [
        {
          "title": "The first post title!"
        },
        {
          "title": "The second post title!"
        },
        {
          "title": "The third post title!"
        },
      ]
    }
  }
})

// Create new Vue instance and mount onto elmement with id app
new Vue({
  el: '#app'
})
