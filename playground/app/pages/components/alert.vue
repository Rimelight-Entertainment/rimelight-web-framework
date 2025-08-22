<script setup lang="ts">
import theme from '#build/rimelightWebFramework/alert'

const variants = Object.keys(theme.variants.variant) as Array<keyof typeof theme.variants.variant>

const actions = (color: string) => [{
  label: 'Action',
  color: color as any,
  onClick() {
    console.log('Action clicked')
  }
}]

const multipleActions = (color: string) => [
  {
    label: 'Action',
    color: color as any,
    onClick() {
      console.log('Action clicked')
    }
  },
  {
    label: 'Another action',
    color: color as any,
    onClick() {
      console.log('Another action clicked')
    }
  },
  {
    label: 'One more action',
    color: color as any,
    onClick() {
      console.log('One more action clicked')
    }
  },
  {
    label: 'And one more',
    color: color as any,
    icon: 'i-lucide-info',
    onClick() {
      console.log('And one more clicked')
    }
  },
  {
    label: 'Last one',
    color: color as any,
    icon: 'i-lucide-info',
    onClick() {
      console.log('Last one clicked')
    }
  }
]

const data = {
  title: 'Heads up!',
  description: 'You can change the primary color in your app config.',
  icon: 'i-lucide-terminal',
  close: true
}
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 items-center">
    <div class="flex flex-col gap-2 w-96">
      <RLAlert :title="data.title" />
      <RLAlert :title="data.title" :icon="data.icon" />
      <RLAlert :title="data.title" :icon="data.icon" :close="data.close" />
      <RLAlert :title="data.title" :icon="data.icon" :close="data.close" :actions="actions('neutral')" orientation="horizontal" />
      <RLAlert :title="data.title" :icon="data.icon" :close="data.close" :description="data.description" />
      <RLAlert :title="data.title" :avatar="{ src: 'https://github.com/benjamincanac.png' }" :close="data.close" :description="data.description" />
      <RLAlert :title="data.title" :icon="data.icon" description="example with multiple actions." :actions="multipleActions('neutral')" />
    </div>

    <div class="flex items-center gap-2">
      <RLAlert
        v-for="variant in variants"
        :key="variant"
        v-bind="data"
        :actions="actions('neutral')"
        :variant="variant"
      />
    </div>
    <div class="flex items-center gap-2">
      <RLAlert
        v-for="variant in variants"
        :key="variant"
        v-bind="data"
        :actions="actions('primary')"
        color="neutral"
        :variant="variant"
      />
    </div>
  </div>
</template>
