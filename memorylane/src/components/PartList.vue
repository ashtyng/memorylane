<template>
  <div>
    <div v-for="item in feed" class="item" v-if="show">
      <p class="idline"><span class="user">{{item.name}}</span><span class="handle">@{{item.username}}</span><span class="time">{{item.created | since}}</span></p>
      <p class="memory">{{item.memory}}</p>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'FeedList',
   data () {
    return {
      show=false;
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
       var feed = this.$store.getters.feed;

     },
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
</style>