<script setup lang="ts">
import theme from '#build/rimelightWebFramework/stepper'

const sizes = Object.keys(theme.variants.size)
const colors = Object.keys(theme.variants.color)
const orientations = Object.keys(theme.variants.orientation)

const orientation = ref('horizontal' as const)
const color = ref('primary' as const)
const size = ref('md' as const)

const items = [
  {
    slot: 'address' as const,
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  }, {
    slot: 'shipping' as const,
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  }, {
    slot: 'payment' as const,
    title: 'Payment',
    description: 'Select your payment method',
    icon: 'i-lucide-credit-card'
  }, {
    slot: 'checkout' as const,
    title: 'Checkout',
    description: 'Confirm your order'
  }
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex items-center justify-center gap-2 ">
      <RLSelect v-model="color" :items="colors" placeholder="Color" />
      <RLSelect v-model="orientation" :items="orientations" placeholder="Orientation" />
      <RLSelect v-model="size" :items="sizes" placeholder="Size" />
    </div>

    <RLStepper
      ref="stepper"
      :items="items"
      :color="color"
      :orientation="orientation"
      :size="size"
    >
      <template #address="{ item }">
        <RLPlaceholder class="size-full min-h-60 min-w-60">
          {{ item.title }}
        </RLPlaceholder>
      </template>

      <template #shipping="{ item }">
        <RLPlaceholder class="size-full min-h-60 min-w-60">
          {{ item.title }}
        </RLPlaceholder>
      </template>

      <template #payment="{ item }">
        <RLPlaceholder class="size-full min-h-60 min-w-60">
          {{ item.title }}
        </RLPlaceholder>
      </template>

      <template #checkout="{ item }">
        <RLPlaceholder class="size-full min-h-60 min-w-60">
          {{ item.title }}
        </RLPlaceholder>
      </template>
    </RLStepper>

    <div class="flex gap-2 justify-between">
      <RLButton
        leading-icon="i-lucide-arrow-left"
        :disabled="!stepper?.hasPrev"
        @click="stepper?.prev()"
      >
        Prev
      </RLButton>

      <RLButton
        trailing-icon="i-lucide-arrow-right"
        :disabled="!stepper?.hasNext"
        @click="stepper?.next()"
      >
        Next
      </RLButton>
    </div>
  </div>
</template>
