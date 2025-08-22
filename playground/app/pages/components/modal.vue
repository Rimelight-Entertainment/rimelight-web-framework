<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <RLModal title="First modal">
      <RLButton color="neutral" variant="outline" label="Open with nested" />

      <template #footer>
        <RLModal title="Second modal">
          <RLButton label="Open second" />
        </RLModal>
      </template>
    </RLModal>

    <RLModal v-model:open="open" title="Modal with v-model" description="This can be useful to control the state of the modal yourself." />

    <RLButton label="Open with v-model" color="neutral" variant="subtle" @click="open = true" />

    <RLModal title="Modal without overlay" description="This modal has `overlay: false` prop." :overlay="false">
      <RLButton label="Open without overlay" color="neutral" variant="outline" />
    </RLModal>

    <RLModal title="Modal without modal & overlay" description="This modal has `modal: false` and `overlay: false` to interact with outside content." :overlay="false" :modal="false">
      <RLButton label="Open without modal" color="neutral" variant="subtle" />
    </RLModal>

    <RLModal title="Modal without transition" description="This modal has `transition: false` prop." :transition="false">
      <RLButton label="Open without transition" color="neutral" variant="outline" />
    </RLModal>

    <RLModal title="Modal without portal" description="This modal has `portal: false` prop." :portal="false">
      <RLButton label="Open without portal" color="neutral" variant="subtle" />
    </RLModal>

    <RLModal title="Modal fullscreen" description="This modal has `fullscreen: true` prop." fullscreen>
      <RLButton label="Open fullscreen" color="neutral" variant="outline" />
    </RLModal>

    <RLModal title="Modal prevent close" description="This modal has `dismissible: false` prop so it won't close when clicking outside." :dismissible="false">
      <RLButton label="Open unclosable" color="neutral" variant="subtle" />
    </RLModal>

    <RLModal title="Modal without close button" description="This modal has `close: false` prop." :close="false">
      <RLButton label="Open without close button" color="neutral" variant="outline" />
    </RLModal>

    <RLModal title="Modal with custom close button" description="The `close` prop inherits from the Button props." :close="{ color: 'primary', variant: 'solid', size: 'xs' }" :ui="{ close: 'top-3.5 rounded-full' }">
      <RLButton label="Open with custom close button" color="neutral" variant="subtle" />
    </RLModal>

    <RLModal title="First modal">
      <RLButton color="neutral" variant="outline" label="Close with scoped slot close" />

      <template #footer="{ close }">
        <RLButton label="Close with scoped slot close" @click="close" />
      </template>
    </RLModal>
  </div>
</template>
