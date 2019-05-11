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
    updateQuestionContent (state, content) {
      state.questionContent.push(content);
    }
  },
  actions: {
    updateQuestionContent (context, content) {
      context.commit('updateQuestionContent', content);
    }
  }
});
