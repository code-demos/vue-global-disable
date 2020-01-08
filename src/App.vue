<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <a-button @click="toggleDisable">切换</a-button>
      <DemoForm />
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import DemoForm from './components/DemoForm';

export default {
  name: 'app',
  provide() {
    // eslint-disable-next-line no-debugger
    debugger
    return this.provider
  },
  data() {
    return {
      zh_CN,
      isDisabled: false
    }
  },
  computed: {
    provider() {
      const { isDisabled } = this
      // eslint-disable-next-line no-debugger
      debugger
      return { isDisabled }
    }
  },
  components: {
    DemoForm
  },
  methods: {
    toggleDisable() {
      this.isDisabled = !this.isDisabled
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
