<template>
  <div class="container my-5">
    <h1>A lot of Tests in here</h1>
    <div 
      v-if="events"
      class="event-cards my-5"
    >
      <div
        class="card col-12 col-lg-6"
        v-for="event in events"
        v-bind:key="event.id" 
      >
        <h2>{{ event.data.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js"
import { collection, getDocs } from 'firebase/firestore'
export default {
  data() {
    return {
      events: []
    }
  },
  async fetch() {
    try {
      const events = [];
      const querySnapshot = await getDocs(collection(db, 'events'));
      querySnapshot.forEach((doc) => {
        const event = {
          id: doc.id,
          data: doc.data()
        }
        events.push(event);
      })
      this.events = events;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
