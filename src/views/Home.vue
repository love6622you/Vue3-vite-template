<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Typescript + Tailwindcss v3" />
    <img
      class="mx-auto my-8"
      alt="powered-by"
      src="@/assets/powered-by-vitawind-bright.png"
    />
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
