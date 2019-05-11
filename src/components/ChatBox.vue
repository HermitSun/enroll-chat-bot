<template>
  <v-container fluid id="footer-wrapper">
    <v-layout>
      <v-input>
        <!--前置按钮-->
        <template #prepend>
          <v-btn icon flat color="#9E9E9E"
                 @click="doSomething">
            <v-icon large>control_point
            </v-icon>
          </v-btn>
        </template>
        <!--输入框-->
        <v-textarea v-model="questionContent"
                    :rules="[rules.required]"
                    label="您想问什么？"
                    rows="1"
                    validate-on-blur
                    outline auto-grow clearable>
        </v-textarea>
        <!--后置按钮-->
        <template #append>
          <v-btn icon flat color="blue"
                 @click="doAsk">
            <v-icon large>near_me
            </v-icon>
          </v-btn>
        </template>
      </v-input>
    </v-layout>
    <!--错误提示-->
    <v-snackbar v-model="showError" multi-line>
      系统好像出了点状况……刷新一下试试？
      <v-btn color="blue" flat
             @click="showError = false">关闭
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  export default {
    name: 'ChatBox',
    data () {
      return {
        questionContent: '', // 输入内容
        rules: { // 输入校验
          required: v => !!v || '输入内容不能为空'
        },
        showError: false // 显示错误弹窗
      };
    },
    methods: {
      doSomething () {
        // 也许将来会做点什么，但现在还没说
      },
      doAsk () {
        // 将输入内容传到Vuex里去
        this.$store.dispatch('updateQuestionContent', this.questionContent)
          .then(() => {
            // 啥都不做
          })
          .catch(() => {
            this.showError = true;
          });
      }
    }
  };
</script>

<style lang="scss">
  #footer-wrapper {
    padding-bottom: 0 !important;
    border: 1px #E3F2FD solid;
    background-color: white;
  }

  .v-input {
    .v-label {
      margin-top: -10px;
    }

    .v-icon {
      &:hover {
        color: #0D47A1;
      }
    }

    label {
      display: none;
    }

    textarea {
      margin-top: 12px !important;
      padding: 0 12px 0 0;
    }

    .v-input__append-inner {
      margin-top: 10px !important;
    }

    .v-messages {
      display: none !important;
    }
  }
</style>
