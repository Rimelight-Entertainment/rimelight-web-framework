<script setup lang="ts">
import theme from '#build/rimelightWebFramework/card'

const variants = Object.keys(theme.variants.variant)

const variant = ref(theme.defaultVariants.variant)
</script>

<template>
  <div class="flex flex-col gap-4">
    <RLSelect v-model="variant" :items="variants" />

    <RLCard :variant="variant" class="w-96">
      <template #header>
        <RLPlaceholder class="h-8" />
      </template>

      <RLPlaceholder class="h-32" />

      <template #footer>
        <RLPlaceholder class="h-8" />
      </template>
    </RLCard>
  </div>
</template>
