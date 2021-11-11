
<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
        <CreateComponent @add-post = "addPost" />
      </div>
  </div>
</template>

<script>
import CreateComponent from '@/components/CreateComponent.vue'

  export default {
    name:'CreatePosts',
    components:{
    CreateComponent
    },
    methods:{
      addPost(newPost){
        //console.log(newPost);
        this.$emit('add-post', newPost);
      }
    }
  }
</script>
