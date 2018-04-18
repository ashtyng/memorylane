<template>
  <div class="feed">
    <div>
      <form v-on:submit.prevent="memory" class="memoryForm">
  <textarea v-model="text" placeholder=""/><br/>
  <div class="buttonWrap">
    <button class="primary" type="submit">Remember!</button>
  </div>
      </form>
    </div>
      <feed-list/>
  </div>
</template>

<script>
 import FeedList from './FeedList';
 export default {
   name: 'UserFeed',
   components: { FeedList},
   data () {
     return {
       text: '',
       showFeed: true,
       showOnThisDay: false,
     }
   },
   created: function() {
     this.$store.dispatch('getFeed');
   },
   methods: {
     memory: function() {
       this.$store.dispatch('addMemory',{
         memory: this.text,
       }).then(memory => {
         this.text = "";
       });
     },

     fullfeed: function() {
      this.showFeed=true;
      this.showOnThisDay=false;
     },

     partfeed: function() {
      this.showFeed=false;
      this.showOnThisDay=true;
     },
   }
 }
</script>

<style scoped>
 .feed {
     width: 600px;
 }
 .memoryForm {
     background: #eee;
     padding: 10px;
     margin-bottom: 10px;
 }
 .buttonWrap {
     width: 100%;
     display: flex;
 }
 button {
     margin-left: auto;
     height: 2em;
     font-size: 0.9em;
 }
 textarea {
     width: 100%;
     height: 5em;
     padding: 2px;
     margin-bottom: 5px;
     resize: none;
     box-sizing: border-box;
 }
 .primary {
    background-color:black;
 }
</style>
