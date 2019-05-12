<template>
  <h1>找不到页面好吧</h1>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'PageNotFound',
    mounted () {
      this.clearQuestion();
    },
    methods: {
      ...mapActions({
        clearQuestion: 'clearQuestionContent'
      })
    }
  };
</script>

<style scoped>

</style>
