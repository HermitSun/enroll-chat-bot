<template>
  <div class="wrapper">
    {{questions}}
    <!--网络异常提示-->
    <v-snackbar v-model="showErrorSnackbar" multi-line>
      网络好像出了点状况……刷新一下试试？
      <v-btn color="blue" flat
             @click="showErrorSnackbar = false">关闭
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  // 设计决策：我认为questions是全局共享的属性，而answers只是这个界面单独拥有的
  // 因为别的页面也有可能用到用户的questions，但answers只在这里出现
  import { mapState } from 'vuex';
  import { Search } from '@/api';

  export default {
    name: 'ChatBot',
    data () {
      return {
        answers: [], // 问题的答案
        showErrorSnackbar: false // 错误提示
      };
    },
    computed: {
      // Vuex状态映射
      ...mapState({
        questions: 'questionContent'
      })
    },
    watch: {
      // 因为从设计上这个数组只会变长而不会变短，所以使用watch监听变化即可，变化时请求搜索
      // 而且有一点，因为JS传递引用，所以发生变化的时候原数组也变了，不能监听数组，而是监听这个变化
      questions (newQuestion) {
        this.doSearch(newQuestion[newQuestion.length - 1]);
      }
    },
    methods: {
      doSearch (question) {
        // 搜索
        Search.getAnswer(question)
          .then(res => {
            console.log(res);
          }).catch(() => {
          this.showErrorSnackbar = true;
        });
      }
    }
  };
</script>

<style scoped>

</style>
