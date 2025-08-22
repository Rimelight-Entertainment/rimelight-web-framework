<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <RLSlideover title="First slideover">
      <RLButton color="neutral" variant="outline" label="Open with nested" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>

      <template #footer>
        <RLSlideover title="Second slideover">
          <RLButton label="Open second" />
        </RLSlideover>
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover on left side" description="This slideover has `side: 'left'` prop." side="left">
      <RLButton label="Open on left" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover on top side" description="This slideover has `side: 'top'` prop." side="top">
      <RLButton label="Open on top" color="neutral" variant="outline" />

      <template #body>
        <RLPlaceholder class="h-48 w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover on bottom side" description="This slideover has `side: 'bottom'` prop." side="bottom">
      <RLButton label="Open on bottom" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-48 w-full" />
      </template>
    </RLSlideover>

    <RLSlideover v-model:open="open" title="Slideover with v-model" description="This is useful to control the state yourself.">
      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLButton label="Open with v-model" color="neutral" variant="outline" @click="open = true" />

    <RLSlideover title="Slideover without overlay" description="This slideover has `overlay: false` prop." :overlay="false">
      <RLButton label="Open without overlay" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover without modal & overlay" description="This slideover has `modal: false` and `overlay: false` to interact with outside content." :overlay="false" :modal="false">
      <RLButton label="Open without modal" color="neutral" variant="outline" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover without transition" description="This slideover has `transition: false` prop." :transition="false">
      <RLButton label="Open without transition" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover without portal" description="This slideover has `portal: false` prop." :portal="false">
      <RLButton label="Open without portal" color="neutral" variant="outline" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover prevent close" description="This slideover has `dismissible: false` prop so it won't close when clicking outside." :dismissible="false">
      <RLButton label="Open unclosable" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover without close button" description="This slideover has `close: false` prop." :close="false">
      <RLButton label="Open without close button" color="neutral" variant="outline" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover with custom close button" description="The `close` prop inherits from the Button props." :close="{ color: 'primary', variant: 'solid', size: 'xs' }" :ui="{ close: 'top-3.5 rounded-full' }">
      <RLButton label="Open with custom close button" color="neutral" variant="subtle" />

      <template #body>
        <RLPlaceholder class="h-full w-full" />
      </template>
    </RLSlideover>

    <RLSlideover title="Slideover with scoped slot close" description="This slideover has a scoped slot close that can be used to close the slideover from within the content.">
      <RLButton color="neutral" variant="subtle" label="Open with scoped slot close" />

      <template #header="{ close }">
        <RLButton label="Close with scoped slot close" @click="close" />
      </template>

      <template #body="{ close }">
        <RLButton label="Close with scoped slot close" @click="close" />
      </template>

      <template #footer="{ close }">
        <RLButton label="Close with scoped slot close" @click="close" />
      </template>
    </RLSlideover>
  </div>
</template>
