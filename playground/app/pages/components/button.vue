<script setup lang="ts">
import { upperFirst } from 'scule'
import theme from '#build/rimelightWebFramework/button'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
const variants = Object.keys(theme.variants.variant) as Array<keyof typeof theme.variants.variant>

function onClick() {
  return new Promise<void>(res => setTimeout(res, 5000))
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <RLButton class="font-bold">
        Button
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton to="/">
        Link
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton disabled>
        Disabled
      </RLButton>

      <RLButton to="#" disabled>
        Disabled Link
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton loading>
        Loading
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton loading-auto @click="onClick">
        Loading auto
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton loading trailing>
        Loading
      </RLButton>
    </div>
    <div class="flex items-center gap-2">
      <RLButton v-for="variant in variants" :key="variant" icon="i-lucide-rocket" :label="upperFirst(variant)" :variant="variant" />
    </div>
    <div class="flex items-center gap-2">
      <RLButton
        v-for="variant in variants"
        :key="variant"
        icon="i-lucide-rocket"
        :label="upperFirst(variant)"
        :variant="variant"
        color="neutral"
      />
    </div>
    <div class="flex items-center gap-2">
      <RLButton
        v-for="variant in variants"
        :key="variant"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        :label="upperFirst(variant)"
        color="neutral"
        :variant="variant"
      />
    </div>
    <div class="flex items-center gap-2 ms-[-129px]">
      <RLButton v-for="size in sizes" :key="size" label="Button" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-171px]">
      <RLButton v-for="size in sizes" :key="size" icon="i-lucide-rocket" label="Button" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-171px]">
      <RLButton v-for="size in sizes" :key="size" :avatar="{ src: 'https://github.com/benjamincanac.png' }" label="Button" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-159px]">
      <RLButton
        v-for="size in sizes"
        :key="size"
        icon="i-lucide-rocket"
        label="Square"
        square
        :size="size"
      />
    </div>
    <div class="flex items-center gap-2 ms-[-159px]">
      <RLButton
        v-for="size in sizes"
        :key="size"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        label="Square"
        square
        :size="size"
      />
    </div>
    <div class="flex items-center gap-2 ms-[-68px]">
      <RLButton v-for="size in sizes" :key="size" icon="i-lucide-rocket" :size="size" />
    </div>
    <div class="flex items-center gap-2 ms-[-68px]">
      <RLButton
        v-for="size in sizes"
        :key="size"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        :size="size"
        color="neutral"
        variant="outline"
      />
    </div>
    <div class="flex items-center gap-2">
      <RLButton icon="i-lucide-rocket" trailing-icon="i-lucide-chevron-down" label="Block" block />
    </div>
    <div class="flex items-center gap-2">
      <RLButton icon="i-lucide-cloud-download" label="Button" class="group" :ui="{ leadingIcon: 'group-hover:animate-pulse' }" />
    </div>
  </div>
</template>
