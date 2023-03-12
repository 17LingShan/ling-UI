<script lang="ts" setup>
defineProps<{
  size?: "small" | "large";
}>();
</script>
<script lang="ts">
export default {
  name: "LButton",
  inheritAttrs: false,
};
</script>
<template>
  <div class="L-Button-root">
    <button :class="[size ?? 'small']">
      <div class="container">
        <slot />
      </div>
    </button>
  </div>
</template>
<style lang="scss" scoped src="../css/defualt.scss"></style>
