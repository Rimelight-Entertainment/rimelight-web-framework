<script setup lang="ts">
const open = ref(false)
const openCustomAnchor = ref(false)
const loading = ref(false)

function send() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 1000)
}
</script>

<template>
  <div class="text-center">
    <div>
      <RLPopover arrow :content="{ side: 'top' }">
        <RLButton label="Click me top" color="neutral" variant="outline" />

        <template #content>
          <div class="w-48 h-16" />
        </template>
      </RLPopover>

      <div class="flex items-center gap-2 my-2">
        <RLPopover arrow :content="{ side: 'left' }">
          <RLButton label="Click me left" color="neutral" variant="outline" />

          <template #content>
            <div class="w-48 h-16" />
          </template>
        </RLPopover>

        <RLPopover arrow :content="{ side: 'right' }">
          <RLButton label="Click me right" color="neutral" variant="outline" />

          <template #content>
            <div class="w-48 h-16" />
          </template>
        </RLPopover>
      </div>

      <RLPopover v-model:open="open" arrow>
        <RLButton label="Click me bottom" color="neutral" variant="outline" />

        <template #content>
          <div class="flex justify-center gap-2 p-4 w-48">
            <RLButton label="Close" color="neutral" @click="open = false" />
            <RLButton label="Send" color="neutral" trailing-icon="i-lucide-send-horizontal" :loading="loading" @click="send" />
          </div>
        </template>
      </RLPopover>

      <div class="mt-8 relative">
        <RLPopover
          v-model:open="openCustomAnchor"
          :dismissible="false"
        >
          <template #anchor>
            <RLInput placeholder="Search" class="w-56" @focus="openCustomAnchor = true" />
          </template>

          <template #content>
            <RLPlaceholder class="size-48 m-4 inline-flex" />
          </template>
        </RLPopover>
      </div>
    </div>

    <div class="mt-24">
      <RLPopover mode="hover" arrow :content="{ side: 'top' }">
        <RLButton label="Hover me top" color="neutral" variant="outline" />

        <template #content>
          <div class="w-48 h-16" />
        </template>
      </RLPopover>

      <div class="flex items-center gap-2 my-2">
        <RLPopover mode="hover" arrow :content="{ side: 'left' }">
          <RLButton label="Hover me left" color="neutral" variant="outline" />

          <template #content>
            <div class="w-48 h-16" />
          </template>
        </RLPopover>

        <RLPopover mode="hover" arrow :content="{ side: 'right' }">
          <RLButton label="Hover me right" color="neutral" variant="outline" />

          <template #content>
            <div class="w-48 h-16" />
          </template>
        </RLPopover>
      </div>

      <RLPopover mode="hover" arrow>
        <RLButton label="Hover me bottom" color="neutral" variant="outline" />

        <template #content>
          <div class="w-48 h-16" />
        </template>
      </RLPopover>
    </div>
  </div>
</template>
