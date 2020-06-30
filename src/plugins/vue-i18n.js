import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: require('../languages/en.json'),
    th: require('../languages/th.json')
  }
})
