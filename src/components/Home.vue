<template>
  <div class="welcome container">
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
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2 {
    font-size: 3em;
  }
  .welcome button {
    margin: 30px;
  }
</style>
