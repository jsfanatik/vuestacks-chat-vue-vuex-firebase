<template>
  <div class="home container">
    <div class="card">
      <div class="card-content center-align">
        <form @submit.prevent="enterChat">
          <h4 for="name">Enter your name:</h4>
          <input type="text" name="name" v-model="name"/>
          <p v-if="feedback" class="green-text">{{ feedback }}</p>
          <button class="btn green">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home {
    max-width: 400px;
    margin-top: 100px;
  }
  .home button {
    margin: 30px;
  }
</style>
