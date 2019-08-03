<template>
  <v-container fluid grid-list-xl>
    <!--网络异常提示-->
    <v-snackbar v-model="showErrorSnackbar"
                color="error"
                multi-line>
      网络好像出了点状况……刷新一下试试？
      <v-btn color="#6A005F" flat
             @click="showErrorSnackbar = false">关闭
      </v-btn>
    </v-snackbar>
    <!--具体的聊天框-->
    <v-layout row wrap>
      <!--欢迎语-->
      <v-flex xs8>
        <v-card light>
          <v-card-text>您想问什么？</v-card-text>
        </v-card>
      </v-flex>
      <template v-for="i in questions.length">
        <!--问题-->
        <v-flex xs8 offset-xs4 :key="'q'+i">
          <v-card dark color="#6A005F">
            <v-card-text>
              <div v-html="linedString(questions[i - 1])"></div>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--回答-->
        <v-flex xs8 :key="'a'+i">
          <v-card light>
            <v-card-text v-if="answers[i]">
              <div v-html="linedString(answers[i])"></div>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
      <!--测试-->
    </v-layout>
  </v-container>
</template>

<script>
  // 设计决策：我认为questions是全局共享的属性，而answers只是这个界面单独拥有的
  // 因为别的页面也有可能用到用户的questions，但answers只在这里出现
  import { mapState, mapActions } from 'vuex';
  import { Search } from '@/api';

  export default {
    name: 'ChatBot',
    data () {
      return {
        answers: [''], // 问题的答案；这里有一个很奇怪的地方，因为页面渲染早于数据获取，如果没有这个空串就会报undefined
        showErrorSnackbar: false, // 错误提示
        showWelcome: true
      };
    },
    computed: {
      // Vuex状态映射
      ...mapState({
        questions: 'questionContent' // 用户搜索的问题
      })
    },
    watch: {
      // 因为从设计上这个数组只会变长而不会变短，所以使用watch监听变化即可，变化时发起搜索请求
      // 而且有一点，因为JS传递引用，所以发生变化的时候原数组也变了，不能监听数组，而是监听这个变化
      questions (newQuestion) {
        this.doSearch(newQuestion[newQuestion.length - 1]);
        // 解决这问题。已解决，用Vuetify的scroll指令。
        // 滚动条自动滚动，问题在于不能$nextTick，看起来DOM似乎没有重绘?
        // 似乎也并不是。超过1699px后不动了。
        // const container = this.$refs['main-wrapper'];
        // container.scrollTop = container.scrollHeight;
      }
    },
    methods: {
      ...mapActions(['changeShowContact']),
      async doSearch (question) {
        // 搜索
        try {
          let res = await Search.getAnswer(question);
          if (res.code !== 200) {
            this.changeShowContact(true);
            this.push('网络出了点问题……刷新一下试试？');
          } else {
            this.answers.push(res.data.answer);
            // 页面滚动到最底部
            this.$vuetify.goTo(
              Number.MAX_SAFE_INTEGER,
              {
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic'
              }
            );
          }
        } catch (err) {
          this.showErrorSnackbar = true;
        }
      },
      getMsgLength (question) {
        return Math.ceil(question.length / 17);
      },
      linedString (raw) {
        return raw.replace(/(\r\n|\n|\r)/gm, '<br>');
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
