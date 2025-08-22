<script setup lang="ts">
import { upperFirst } from 'scule'
import theme from '#build/rimelightWebFramework/input'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
const variants = Object.keys(theme.variants.variant) as Array<keyof typeof theme.variants.variant>
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col gap-4 w-48">
      <RLInput autofocus placeholder="Search..." />
    </div>
    <div class="flex items-center gap-2">
      <RLInput v-for="variant in variants" :key="variant" :placeholder="upperFirst(variant)" :variant="variant" class="w-48" />
    </div>
    <div class="flex items-center gap-2">
      <RLInput
        v-for="variant in variants"
        :key="variant"
        :placeholder="upperFirst(variant)"
        :variant="variant"
        color="neutral"
        class="w-48"
      />
    </div>
    <div class="flex items-center gap-2">
      <RLInput
        v-for="variant in variants"
        :key="variant"
        :placeholder="upperFirst(variant)"
        :variant="variant"
        color="error"
        highlight
        class="w-48"
      />
    </div>
    <div class="flex flex-col gap-4 w-48">
      <RLInput placeholder="Disabled" disabled />
      <RLInput placeholder="Required" required />
      <RLInput icon="i-lucide-calculator" type="number" :model-value="10" />
      <RLInput icon="i-lucide-folder" type="file" />
      <RLInput icon="i-lucide-calendar" type="date" :model-value="new Date().toISOString().substring(0, 10)" />
      <RLInput icon="i-lucide-lock" type="password" model-value="password" />
      <RLInput loading placeholder="Search..." />
      <RLInput loading trailing placeholder="Search..." />
      <RLInput loading icon="i-lucide-search" trailing-icon="i-lucide-chevron-down" placeholder="Search..." />
    </div>
    <div class="flex items-center gap-4">
      <RLInput
        v-for="size in sizes"
        :key="size"
        placeholder="Search..."
        :size="size"
        class="w-48"
      />
    </div>
    <div class="flex items-center gap-4">
      <RLInput
        v-for="size in sizes"
        :key="size"
        icon="i-lucide-search"
        placeholder="Search..."
        :size="size"
        class="w-48"
      />
    </div>
    <div class="flex items-center gap-4">
      <RLInput
        v-for="size in sizes"
        :key="size"
        icon="i-lucide-search"
        trailing
        placeholder="Search..."
        :size="size"
        class="w-48"
      />
    </div>
    <div class="flex items-center gap-4">
      <RLInput
        v-for="size in sizes"
        :key="size"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        icon="i-lucide-search"
        trailing
        placeholder="Search..."
        :size="size"
        class="w-48"
      />
    </div>
  </div>
</template>
