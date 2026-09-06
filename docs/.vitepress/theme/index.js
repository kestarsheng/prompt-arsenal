// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import SourceCodeToggle from '../components/SourceCodeToggle.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SourceCodeToggle', SourceCodeToggle)
  }
}