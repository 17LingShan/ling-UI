<script lang="ts" setup>
defineProps<{
  size?: "large" | "small";
  type?: "default" | "primary" | "warning";
}>();
</script>

<script lang="ts">
export default {
  name: "LButton"
};
</script>

<template>
  <div class="ls-button-root">
    <button :class="[size ?? 'small', type ?? 'default']" type="button">
      <div class="container">
        <slot />
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped src="./css/default.scss"></style>
