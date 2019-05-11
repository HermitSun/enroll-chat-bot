<template>
  <div class="wrapper">
    {{$store.state.questionContent}}
  </div>
</template>

<script>
  export default {
    name: 'ChatBot',
    data () {
      return {
        questions: [],
        answers: []
      };
    },
    mounted () {
      this.questions = this.$store.questionContent;
    },
    methods: {
      doSearch (content) {

      }
    }
  };
</script>

<style scoped>

</style>
