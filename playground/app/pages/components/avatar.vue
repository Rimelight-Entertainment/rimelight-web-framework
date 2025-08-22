<script setup lang="ts">
import theme from '#build/rimelightWebFramework/avatar'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
</script>

<template>
  <RLLayoutBox direction="vertical" gap="sm" align-items="center">
    <div class="flex items-center gap-1.5">
      <RLAvatar v-for="size in sizes" :key="size" src="https://github.com/benjamincanac.png" alt="Benjamin Canac" :size="size" />
    </div>
    <div class="flex items-center gap-1.5">
      <RLAvatar v-for="size in sizes" :key="size" icon="i-lucide-image" :size="size" />
    </div>
    <div class="flex items-center gap-1.5">
      <RLAvatar v-for="size in sizes" :key="size" alt="Benjamin Canac" :size="size" />
    </div>
    <div class="flex items-center gap-1.5">
      <RLAvatar v-for="size in sizes" :key="size" :text="size" :size="size" />
    </div>

    <div class="flex items-center gap-1.5">
      <RLAvatarGroup v-for="size in sizes" :key="size" :size="size" :max="2">
        <RLChip inset text="1">
          <RLAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
        </RLChip>
        <RLAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
        <RLAvatar src="https://github.com/noook.png" alt="Neil Richter" />
      </RLAvatarGroup>
    </div>
    <div class="flex items-center gap-1.5">
      <RLAvatarGroup v-for="size in sizes" :key="size" :size="size" :max="4">
        <RLAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
        <RLAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
        <RLAvatar src="https://github.com/noook.png" alt="Neil Richter" />
      </RLAvatarGroup>
    </div>
  </RLLayoutBox>
</template>
