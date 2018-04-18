<template>
  <div>

      <div class='feedMenu'>
      <button v-on:click.prevent="showAll=true" class="primary" type="submit">Full Journal</button>
      <button v-on:click.prevent="showAll=false" class="primary" type="submit">Today's Random Memory</button>
      </div>

    <template v-if="showAll">
    <div v-for="item in feed" class="item" >
      <p class="idline"><span class="user">{{item.name}}</span>
      <span class="time">{{item.created | since}}</span></p>
      <p class="memory">{{item.memory}}</p>
    </div></template>

    <template v-else>
    <p class="idline"><span class="user">{{memoryFeed.name}}</span>
    <span class="time">{{memoryFeed.created | since}}</span></p>
     <p class="memory"> {{memoryFeed.memory}} </p>
    </template>

  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'FeedList',
   data () {
      return {
        showAll:true,
      }
   },
   filters: {
     since: function(datetime) {
       moment.locale('en', {
	 relativeTime: {
	   future: 'in %s',
	   past: '%s',
	   s:  'seconds',
	   ss: '%ss',
	   m:  '1m',
	   mm: '%dm',
	   h:  'h',
	   hh: '%dh',
	   d:  'd',
	   dd: '%dd',
	   M:  ' month',
	   MM: '%dM',
	   y:  'a year',
	   yy: '%dY'
	 }
       });
       return moment(datetime).fromNow();
     },
   },
   computed: {
     feed: function() {
       return this.$store.getters.feed;
     },
     memoryFeed: function() {
        var fullFeed=this.$store.getters.feed;
        var size=fullFeed.length;
        var rand=Math.floor(Math.random()*size);
        return fullFeed[rand];
     },
   },
   methods: {
   },
 }
</script>

<style scoped>
 .item {
     border-bottom: 1px solid #ddd;
     padding: 10px;
 }
 .memory {
     margin-top: 0px;
 }
 .idline {
     margin-bottom: 0px;
 }
 .user {
     font-weight: bold;
     margin-right: 10px;
 }
 .handle {
     margin-right: 10px;
     color: #666;
 }
 .time {
     float: right;
     color: #666;
 }
 .primary {
     background-color: black;
 }
</style>
