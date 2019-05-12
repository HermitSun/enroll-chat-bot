<template>
  <v-container fluid id="footer-wrapper">
    <!--验证提示-->
    <v-tooltip v-model="showEmptyTip" top>
      <template #activator="{ on }">
        <div v-on="on" id="tip"></div>
      </template>
      <span>请输入搜索内容</span>
    </v-tooltip>
    <!--输入部分-->
    <v-layout>
      <v-input>
        <!--前置按钮-->
        <template #prepend>
          <v-btn icon flat color="grey darken-1"
                 @click="changeShowContact(!showContact)">
            <v-icon large>control_point
            </v-icon>
          </v-btn>
        </template>
        <!--输入框-->
        <v-textarea v-model="questionContent"
                    :rules="[rules.required]"
                    rows="1"
                    @blur="questionContent ? showEmptyTip = false:showEmptyTip = true"
                    validate-on-blur
                    outline auto-grow clearable>
        </v-textarea>
        <!--后置按钮-->
        <template #append>
          <v-btn icon flat color="blue darken-2"
                 @click="doAsk">
            <v-icon large>near_me
            </v-icon>
          </v-btn>
        </template>
      </v-input>
    </v-layout>
    <!--联系客服-->
    <v-fab-transition>
      <v-btn absolute dark fab top left small color="pink"
             @click="doContact"
             v-show="showContact">
        <v-icon>call</v-icon>
      </v-btn>
    </v-fab-transition>
    <!--错误提示-->
    <v-snackbar v-model="showErrorSnackbar" multi-line>
      系统好像出了点状况……刷新一下试试？
      <v-btn color="blue" flat
             @click="showErrorSnackbar = false">关闭
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'ChatBox',
    data () {
      return {
        questionContent: '', // 输入内容
        rules: { // 输入校验
          required: v => !!v || '请输入搜索内容'
        },
        showEmptyTip: false, // 显示为空提示
        showErrorSnackbar: false // 显示错误弹窗
      };
    },
    computed: {
      ...mapState(['showContact']) // 显示联系客服
    },
    methods: {
      ...mapActions({
        updateQuestion: 'updateQuestionContent',
        changeShowContact: 'changeShowContact'
      }),
      doAsk () {
        // 将输入内容传到Vuex里去
        if (!this.questionContent) {
          this.showEmptyTip = true;
          return;
        }
        this.changeShowContact(false);
        this.updateQuestion(this.questionContent)
          .then(() => {
            this.questionContent = '';
          })
          .catch(() => {
            this.showErrorSnackbar = true;
          });
      },
      doContact () {
        // 联系客服
        console.log('客服出来挨打');
      }
    }
  };
</script>

<style lang="scss">
  #footer-wrapper {
    padding-left: 8px !important;
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
