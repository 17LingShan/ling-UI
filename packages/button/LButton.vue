<script lang="ts" setup>
defineProps<{
  size?: "large" | "small";
  type?: "default" | "primary";
}>();
</script>

<script>
export default {
  name: "LButton"
};
</script>

<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

<style lang="scss">
button {
  outline: none;
  border: none;
}
</style>
