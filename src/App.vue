<template>
  <div id="app">
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
export default {
  name: "App",
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
