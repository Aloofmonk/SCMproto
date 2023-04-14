<template>
  <MyHeader :hideDiv="hideDiv" :showDiv1="showDiv1" @hide-div1="hideDiv1"
  :showDiv2="showDiv2" @hide-div2="hideDiv2"
  :showDiv3="showDiv3" @hide-div3="hideDiv3"
  :showDiv4="showDiv4" @hide-div4="hideDiv4"
  :showDiv5="showDiv5" @hide-div5="hideDiv5"
  :hide1="hide1"
  :hide2="hide2"
  :hide3="hide3"
  :hide4="hide4"
  :hide5="hide5"
  />
  <MyHome :hideDiv="hideDiv"/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHome from './components/MyHome.vue'

export default {
  name: 'App',
  components: {
    MyHome,
    MyHeader
  },
  data() {
    return {
      showDiv1: false,
      showDiv2: false,
      showDiv3: false,
      showDiv4: false,
      showDiv5: false,
      hideTimeout: null
    };
  },
  methods:{
    
    hide1() {
      this.showDiv1 = true;
      this.showDiv2 = false;
      this.showDiv3 = false;
      this.showDiv4 = false;
      this.showDiv5 = false;
    },
    hide2() {
      this.showDiv1 = false;
      this.showDiv2 = true;
      this.showDiv3 = false;
      this.showDiv4 = false;
      this.showDiv5 = false;
    },
    hide3() {
      this.showDiv1 = false;
      this.showDiv2 = false;
      this.showDiv3 = true;
      this.showDiv4 = false;
      this.showDiv5 = false;
    },
    hide4() {
      this.showDiv1 = false;
      this.showDiv2 = false;
      this.showDiv3 = false;
      this.showDiv4 = true;
      this.showDiv5 = false;
    },
    hide5() {
      this.showDiv1 = false;
      this.showDiv2 = false;
      this.showDiv3 = false;
      this.showDiv4 = false;
      this.showDiv5 = true;
    },
    hideDiv() {
      this.hideTimeout = setTimeout(() => {
        this.showDiv1 = false;
        this.showDiv2 = false;
        this.showDiv3 = false;
        this.showDiv4 = false;
        this.showDiv5 = false;
      }, -1000); // Set the duration to 500 
    },
    cancelHide() {
      clearTimeout(this.hideTimeout);
    },
    hideDiv1() {
      this.showDiv1 = true;
    },
    hideDiv2() {
      this.showDiv2 = true;
    },
    hideDiv3() {
      this.showDiv3 = true;
    },
    hideDiv4() {
      this.showDiv4 = true;
    },
    hideDiv5() {
      this.showDiv5 = true;
    },
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
