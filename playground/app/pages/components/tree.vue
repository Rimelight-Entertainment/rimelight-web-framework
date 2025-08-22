<script setup lang="ts">
import type { TreeItem } from '@rimelight/rimelight-web-framework'
import theme from '#build/rimelightWebFramework/tree'

const colors = Object.keys(theme.variants.color) as Array<keyof typeof theme.variants.color>
const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const color = ref(theme.defaultVariants.color)
const size = ref(theme.defaultVariants.size)

const items = [
  {
    label: 'app',
    defaultExpanded: true,
    slot: 'app' as const,
    children: [{
      label: 'composables',
      defaultExpanded: true,
      children: [
        { label: 'useAuth.ts', icon: 'i-vscode-icons-file-type-typescript' },
        { label: 'useUser.ts', icon: 'i-vscode-icons-file-type-typescript' }
      ]
    }, {
      label: 'components',
      children: [{
        label: 'Home',
        children: [
          { label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
          { label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' }
        ]
      }]
    }]
  },
  { label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' }
] satisfies TreeItem[]

const itemsWithMappedId = [
  { id: 'id', title: 'hello' },
  { id: 'id2', title: 'there' },
  { id: 'id3', title: 'obiwan kenobi' }
]

const modelValue = ref<string>()
const modelValues = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <RLSelect v-model="color" :items="colors" placeholder="Color" />
      <RLSelect v-model="size" :items="sizes" placeholder="Size" />
    </div>

    <RLTree
      v-model="modelValues"
      :items="items"
      :color="color"
      :size="size"
      expanded-icon="i-lucide-chevron-up"
      collapsed-icon="i-lucide-chevron-down"
      multiple
    />

    <!-- Typescript tests -->
    <template v-if="false">
      <RLTree :model-value="modelValues" :items="items" multiple />
      <RLTree :default-value="modelValues" :items="items" multiple />
      <RLTree :items="items" multiple @update:model-value="(payload) => payload" />
      <RLTree :model-value="modelValue" :items="items" />
      <RLTree :default-value="modelValue" :items="items" />
      <RLTree :items="items" @update:model-value="(payload) => payload" />

      <RLTree v-model="modelValue" :items="itemsWithMappedId" value-key="id" />
      <RLTree v-model="modelValue" :items="itemsWithMappedId" label-key="title" />
    </template>
  </div>
</template>
