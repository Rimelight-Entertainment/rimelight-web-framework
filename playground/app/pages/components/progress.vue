<script setup lang="ts">
import { onMounted, ref } from 'vue'
import theme from '#build/rimelightWebFramework/progress'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const value1 = ref(0)
const value2 = ref(0)
const max = ['Waiting...', 'Cloning...', 'Migrating...', 'Deploying...', 'Done!']

onMounted(() => {
  setInterval(() => {
    if (value1.value === 100) {
      value1.value = 0
      return
    }

    value1.value += 25
  }, 1000)

  setInterval(() => {
    if (value2.value === 4) {
      value2.value = 0
      return
    }

    value2.value += 1
  }, 1000)
})
</script>

<template>
  <div class="flex flex-col gap-8 items-center">
    <div class="flex flex-col gap-4 w-48">
      <RLProgress />
      <RLProgress color="neutral" />
      <RLProgress color="error" />
      <RLProgress animation="carousel-inverse" />
      <RLProgress animation="swing" />
      <RLProgress animation="elastic" />
      <RLProgress v-model="value2" :max="max" status />
      <RLProgress v-model="value2" :max="max" status inverted />
    </div>

    <div class="flex items-center gap-4">
      <RLProgress v-for="size in sizes" :key="size" v-model="value1" :size="size" class="w-48" />
    </div>

    <div class="h-48 flex items-center gap-8">
      <RLProgress orientation="vertical" />
      <RLProgress orientation="vertical" animation="carousel-inverse" />
      <RLProgress orientation="vertical" animation="swing" />
      <RLProgress orientation="vertical" animation="elastic" />
      <RLProgress v-model="value2" orientation="vertical" :max="max" status class="w-48 justify-start" />
      <RLProgress
        v-model="value2"
        orientation="vertical"
        :max="max"
        status
        inverted
        class="w-48 justify-start"
      />
    </div>

    <div class="h-48 flex items-center gap-8">
      <RLProgress v-for="size in sizes" :key="size" v-model="value1" orientation="vertical" :size="size" />
    </div>
  </div>
</template>
