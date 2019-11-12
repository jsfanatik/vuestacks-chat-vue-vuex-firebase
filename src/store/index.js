import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    loadMessages: (state, messages) => {
      state.messages = messages
    }
  },
  actions: {
    loadMessages: async context => {
      let snapshot = await db.collection('messages').orderBy('timestamp').get()
      const messages = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        appData.timestamp = moment(doc.timestamp).format('lll')
        messages.push(appData)
      })
      context.commit('loadMessages', messages)
    }
  }
})
