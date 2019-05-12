<template>
  <!--这次实际上是偷懒了，没有完全组件化，这个入口文件实在是丑陋-->
  <!--TODO: 优化结构-->
  <v-app>
    <!--顶部导航栏-->
    <v-toolbar color="blue" fixed dark app>
      <v-img :src="require('./assets/images/logo.svg')"
             max-width="45"
             max-height="45"
             alt="LOGO"></v-img>
      <v-toolbar-title style="cursor: default">神秘的聊天机器人</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--TODO 跳转到接口对应的主页-->
      <v-btn icon @click="$router.push('/main-home')">
        <v-icon large>home</v-icon>
      </v-btn>
    </v-toolbar>
    <!--聊天内容-->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!--底部输入框-->
    <v-footer app>
      <ChatBox></ChatBox>
    </v-footer>
  </v-app>
</template>

<script>
  import ChatBox from '@/components/ChatBox';

  export default {
    name: 'App',
    components: { ChatBox }
  };
</script>

<style lang="scss">
  @import "~assets/scss/common.scss";
</style>
