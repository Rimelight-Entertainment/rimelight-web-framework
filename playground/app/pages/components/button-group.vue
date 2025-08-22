<script setup lang="ts">
import theme from '#build/rimelightWebFramework/button'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="flex flex-col gap-4 -ms-[110px]">
      <RLButtonGroup>
        <RLButton>Button</RLButton>
      </RLButtonGroup>

      <RLButtonGroup>
        <RLInput placeholder="Search..." />
      </RLButtonGroup>

      <RLButtonGroup>
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
        <RLButton color="neutral" variant="subtle">
          Button
        </RLButton>
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
      </RLButtonGroup>

      <RLButtonGroup orientation="vertical">
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
        <RLInput placeholder="Search..." />
      </RLButtonGroup>

      <RLButtonGroup>
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
        <RLInput placeholder="Search..." />
      </RLButtonGroup>

      <RLButtonGroup>
        <RLInput placeholder="Search..." />
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
      </RLButtonGroup>

      <RLButtonGroup>
        <RLBadge color="neutral" variant="outline" size="lg" label="https://" />
        <RLInput color="neutral" variant="outline" placeholder="www.example.com" />
      </RLButtonGroup>
    </div>

    <div class="flex gap-4 items-center justify-center">
      <RLButtonGroup v-for="size in sizes" :key="size" :size="size">
        <RLInput placeholder="Search..." />
        <RLButton color="neutral" variant="outline">
          Button
        </RLButton>
      </RLButtonGroup>
    </div>
  </div>
</template>
