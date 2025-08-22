<script setup lang="ts">
import theme from '#build/rimelightWebFramework/form-field'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const feedbacks = [
  { description: 'This is a description' },
  { error: 'This is an error' },
  { hint: 'This is a hint' },
  { help: 'Help! I need somebody!' },
  { required: true }
]
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col gap-4 ms-[-38px]">
      <div v-for="(feedback, count) in feedbacks" :key="count" class="flex items-center">
        <RLFormField v-bind="feedback" label="Email" name="email">
          <RLInput placeholder="john@lennon.com" />
        </RLFormField>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <RLFormField
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Email"
        name="email"
      >
        <RLInput placeholder="john@lennon.com" />
      </RLFormField>
    </div>

    <div class="flex items-center gap-4">
      <RLFormField
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Email"
        description="This is a description"
        name="email"
      >
        <RLInput placeholder="john@lennon.com" />
      </RLFormField>
    </div>
  </div>
</template>
