import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: '',
    questionContent: []
  },
  mutations: {
    updateQuestionContent (state, question) {
      state.questionContent.push(question);
    }
  },
  actions: {
    updateQuestionContent (context, question) {
      context.commit('updateQuestionContent', question);
    }
  }
});
