<template>
  <!--这次实际上是偷懒了，没有完全组件化，这个入口文件实在是丑陋-->
  <v-app>
    <!--顶部导航栏-->
    <v-toolbar color="#6A005F" fixed dark app>
      <v-img :src="require('./assets/images/NJULogo.png')"
             max-width="100"
             max-height="60"
             alt="LOGO"></v-img>
      <v-toolbar-title style="cursor: default">南大招生</v-toolbar-title>
    </v-toolbar>
    <!--TODO:弹性伸缩的聊天内容和输入框-->
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
