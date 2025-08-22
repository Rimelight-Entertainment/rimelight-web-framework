<script setup lang="ts">
import theme from '#build/rimelightWebFramework/checkbox'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
const variants = Object.keys(theme.variants.variant)
const variant = ref('list' as const)
const indicators = Object.keys(theme.variants.indicator) as Array<keyof typeof theme.variants.indicator>
const indicator = ref('start' as const)

const checked = ref(true)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex gap-4">
      <RLSelect v-model="variant" :items="variants" />
      <RLSelect v-model="indicator" :items="indicators" />
    </div>

    <div class="flex flex-col gap-4">
      <RLCheckbox v-model="checked" label="Primary" :variant="variant" :indicator="indicator" orientation="horizontal" />
      <RLCheckbox label="Neutral" color="neutral" :variant="variant" :indicator="indicator" :default-value="true" />
      <RLCheckbox label="Error" color="error" :variant="variant" :indicator="indicator" :model-value="true" />
      <RLCheckbox label="Icon" icon="i-lucide-heart" :variant="variant" :indicator="indicator" :model-value="true" />
      <RLCheckbox label="Default value" :variant="variant" :indicator="indicator" :default-value="true" />
      <RLCheckbox label="Indeterminate" :variant="variant" :indicator="indicator" default-value="indeterminate" />
      <RLCheckbox label="Required" :variant="variant" :indicator="indicator" required />
      <RLCheckbox label="Disabled" :variant="variant" :indicator="indicator" disabled />
    </div>
    <div class="flex items-center gap-4 me-[-11px]">
      <RLCheckbox
        v-for="size in sizes"
        :key="size"
        label="Check me"
        :size="size"
        :variant="variant"
        :indicator="indicator"
      />
    </div>
    <div class="flex items-center gap-4 me-[-96px]">
      <RLCheckbox
        v-for="size in sizes"
        :key="size"
        label="Check me"
        description="This is a description"
        :size="size"
        :variant="variant"
        :indicator="indicator"
      />
    </div>
  </div>
</template>
