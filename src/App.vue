<template>
  <div id="app">
    <Header />
    {{ $t("welcome", { name: getName }) }}
    <div>
      <template v-for="locale in locales">
        <button  :key="locale" @click="changeLocale(locale)">
          {{ locale }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      locales: ["en", "th"],
      name: {
        en: "bas",
        th: "บาส",
      },
    };
  },
  computed: {
    getName() {
      return this.name[this.getCurrentLocale];
    },
    getCurrentLocale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLocale(value) {
      this.$i18n.locale = value
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
