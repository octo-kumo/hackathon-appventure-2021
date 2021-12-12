<template>
  <div id="app">
    <navbar :name="headerData.title"></navbar>
    <main class="container max-w-6xl mx-auto py-4 pt-16">
      <Nuxt class="mt-4"/>
    </main>
  </div>
</template>
<script>
import navbar from "~/components/navbar"

export default {
  components: {
    navbar
  },
  computed: {
    headerData() {
      return this.$route.matched.map(r => {
        return r.components.default.options.head()
      })[0]
    }
  }
}
</script>
