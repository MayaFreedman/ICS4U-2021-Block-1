<template>
  <div>
    <IndexComponent :posts="this.posts"/>
  </div>
</template>

<script>
import IndexComponent from '@/components/IndexComponent' 
console.log("ooga");

export default {
  name: 'Posts',
  components: {
IndexComponent
  }, props:{
    posts: Array
  },
  mounted(){
    console.log(this.posts)
  }
}

</script>

