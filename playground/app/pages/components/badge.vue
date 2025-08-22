<script setup lang="ts">
import { upperFirst } from 'scule'
import theme from '#build/rimelightWebFramework/badge'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
const variants = Object.keys(theme.variants.variant) as Array<keyof typeof theme.variants.variant>
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <RLBadge class="font-bold">
        Badge
      </RLBadge>
    </div>
    <div class="flex items-center gap-2">
      <RLBadge v-for="variant in variants" :key="variant" icon="i-lucide-rocket" :label="upperFirst(variant)" :variant="variant" />
    </div>
    <div class="flex items-center gap-2">
      <RLBadge
        v-for="variant in variants"
        :key="variant"
        icon="i-lucide-rocket"
        :label="upperFirst(variant)"
        :variant="variant"
        color="neutral"
      />
    </div>
    <div class="flex items-center gap-2">
      <RLBadge
        v-for="variant in variants"
        :key="variant"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        :label="upperFirst(variant)"
        :variant="variant"
        color="neutral"
      />
    </div>
    <div class="flex items-center gap-2 ms-[-90px]">
      <RLBadge v-for="size in sizes" :key="size" label="Badge" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-122px]">
      <RLBadge v-for="size in sizes" :key="size" icon="i-lucide-rocket" label="Badge" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-130px]">
      <RLBadge v-for="size in sizes" :key="size" :avatar="{ src: 'https://github.com/benjamincanac.png' }" label="Badge" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-52px]">
      <RLBadge v-for="size in sizes" :key="size" icon="i-lucide-rocket" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-60px]">
      <RLBadge
        v-for="size in sizes"
        :key="size"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        :size="size"
        color="neutral"
        variant="outline"
      />
    </div>
  </div>
</template>
