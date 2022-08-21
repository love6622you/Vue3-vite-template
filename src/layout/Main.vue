<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
