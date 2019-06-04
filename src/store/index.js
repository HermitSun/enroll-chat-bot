import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: '', // token
    questionContent: [], // 全局共享问题内容
    showContact: false // 是否显示咨询按钮
  },
  mutations: {
    updateToken (state, token) {
      state.token = token;
    },
    updateQuestionContent (state, question) {
      state.questionContent.push(question);
    },
    clearQuestionContent (state) {
      state.questionContent = [];
    },
    changeShowContact (state, show) {
      state.showContact = show;
    }
  },
  actions: {
    updateToken (context, token) {
      context.commit('updateToken', token);
    },
    updateQuestionContent (context, question) {
      context.commit('updateQuestionContent', question);
    },
    clearQuestionContent (context) {
      context.commit('clearQuestionContent');
    },
    changeShowContact (context, show) {
      context.commit('changeShowContact', show);
    }
  }
});
