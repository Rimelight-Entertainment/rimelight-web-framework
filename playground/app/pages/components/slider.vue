<script setup lang="ts">
import theme from '#build/rimelightWebFramework/slider'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const value = ref(50)
</script>

<template>
  <div class="flex flex-col gap-6 items-center">
    <div class="flex flex-col gap-6 w-48">
      <RLSlider v-model="value" />
      <RLSlider color="neutral" :model-value="50" />
      <RLSlider color="error" :model-value="50" />
      <RLSlider :default-value="100" />
      <RLSlider inverted />
      <RLSlider disabled />
      <RLSlider :min="4" :max="12" :step="2" :model-value="6" />
    </div>

    <div class="flex flex-col gap-6 w-48">
      <RLSlider :default-value="[0, 20]" />
      <RLSlider :model-value="[0, 20]" />
      <RLSlider :model-value="[0, 20, 80]" />
      <RLSlider :model-value="[0, 80]" :min-steps-between-thumbs="20" />
    </div>

    <div class="flex items-center gap-6">
      <RLSlider v-for="size in sizes" :key="size" v-model="value" :size="size" class="w-48" />
    </div>

    <div class="h-48 flex items-center gap-6">
      <RLSlider :model-value="[0, 20, 80]" orientation="vertical" />
      <RLSlider v-model="value" orientation="vertical" />
      <RLSlider :model-value="[0, 80]" :min-steps-between-thumbs="20" orientation="vertical" />
    </div>
  </div>
</template>
