<template lang="html">
  <div class="chat container">
    <div class="center">
      <router-link to="/" class="btn green">Return to Home</router-link>
    </div><br>
    <div class="card">
      <div class="card-content">
        <div>
          <ul class="messages" v-chat-scroll>
            <li class="chat-message" v-for="message in messages" :key="message.id">
              <div class="right-bubble" v-if="message.name === name">
                <span class="green-text">{{ message.name }}&nbsp;</span>
                <span class="grey-text text-darken-3">{{ message.content }}</span>
                <span class="grey-text time">{{ message.timestamp }}</span>
              </div>
              <div class="left-bubble right-align" v-if="message.name !== name">
                <span class="green-text">{{ message.name }}&nbsp;</span>
                <span class="grey-text text-darken-3">{{ message.content }}</span>
                <span class="grey-text time">{{ message.timestamp }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-action">
        <div class="new-message">
          <form @submit.prevent="addMessage">
            <label for="new-message">New Message from {{ name }} (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage"/>
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/main'
import { mapState } from 'vuex'
export default {
  name: 'Chat',
  props: ['name'],
  data(){
    return {
      newMessage: null,
      feedback: null
    }
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage () {
      this.$store.dispatch('loadMessages')
    },
    async addMessage () {
      if(this.newMessage){
        await db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        })
        this.newMessage = null
        this.feedback = null
        this.getMessage()
      } else {
        this.feedback = "you must enter a message"
      }
    }
  },
  computed: mapState([
    'messages'
  ])
}
</script>

<style>
.container {
  border-radius: 5px;
}
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.chat-message {
  width: 80%;
  min-height: 40px;
}
.chat-message .right-bubble {
  position: relative;
  background: #dcf8c6;
  border-top-left-radius: .4em;
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding: 5px 10px 10px;
  margin-bottom: 10px;
  left: 50%;
  width: 70%
}
.chat-message .right-bubble:after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border: 27px solid transparent;
  border-left-color: #dcf8c6;
  border-right: 0;
  border-top: 0;
  margin-top: -0.5px;
  margin-right: -27px;
}
.chat-message .left-bubble {
  position: relative;
  background: #efefef;
  border-top-right-radius: .4em;
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding: 5px 10px 10px;
  margin-bottom: 10px;
  left: 5%;
  width: 70%;
}
.chat-message .left-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border: 27px solid transparent;
  border-right-color: #efefef;
  border-left: 0;
  border-top: 0;
  margin-top: -0.5px;
  margin-left: -27px;
}
</style>
