<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Tabbar",
  components: {

  },
  props: {},
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {},
};
</script>

<style scoped>

  #tab-bar {
    display: flex;/*均分*/
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);
  }
  
  
</style>
