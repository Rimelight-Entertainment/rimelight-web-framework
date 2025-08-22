<script setup lang="ts">
import theme from '#build/rimelightWebFramework/switch'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const checked = ref(true)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col gap-4 ms-[-114px]">
      <RLSwitch v-model="checked" label="Primary" />
      <RLSwitch color="neutral" label="Neutral" :default-value="true" />
      <RLSwitch color="error" label="Error" :default-value="true" />
      <RLSwitch label="Default value" :default-value="true" />
      <RLSwitch label="Required" required />
      <RLSwitch label="Disabled" disabled />
    </div>
    <div class="flex items-center gap-4 ms-[-82px]">
      <RLSwitch v-for="size in sizes" :key="size" :size="size" label="Switch me" />
    </div>
    <div class="flex items-center gap-4 ms-[-82px]">
      <RLSwitch
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Switch me"
        unchecked-icon="i-lucide-x"
        checked-icon="i-lucide-check"
      />
    </div>
    <div class="flex items-center gap-4 ms-[-82px]">
      <RLSwitch
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Switch me"
        unchecked-icon="i-lucide-x"
        checked-icon="i-lucide-check"
        loading
      />
    </div>
    <div class="flex items-center gap-4">
      <RLSwitch
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Switch me"
        description="This is a description"
      />
    </div>
    <div class="flex items-center gap-4">
      <RLSwitch
        v-for="size in sizes"
        :key="size"
        :size="size"
        label="Switch me"
        description="This is a description"
        unchecked-icon="i-lucide-x"
        checked-icon="i-lucide-check"
      />
    </div>
  </div>
</template>
