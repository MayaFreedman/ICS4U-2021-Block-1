// App.vue



<template>
<!--<CreatePosts @add-post="addPost"/>-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav><br />
    <div class = "container">
      
    <transition name="fade">
      <router-view  :posts="posts" @add-post="addPost"></router-view>
    </transition>
    </div>
</template>

<script>

import HomeComponent from './components/HomeComponent.vue'
import CreateComponent from '@/components/CreateComponent.vue'
import CreatePosts from '@/views/CreatePosts.vue'

export default {
  name: 'app',
  components: {
    HomeComponent,
    },
  methods:{
  addPost(newPost){
    this.posts.push(newPost);
  //console.log(posts);
  }
},
created(){
  this.posts = []
}
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
