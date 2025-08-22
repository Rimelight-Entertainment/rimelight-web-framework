<script setup lang="ts">
const open = ref(false)
const inset = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <RLSwitch v-model="inset" label="Inset" class="mb-4" />

    <RLDrawer v-model:open="open" title="Drawer with v-model" description="This is useful to control the state yourself." :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open with v-model" />

      <template #body>
        <RLPlaceholder class="h-48 w-full" />
      </template>

      <template #footer>
        <RLButton label="Submit" color="neutral" class="justify-center" />
        <RLButton label="Cancel" color="neutral" variant="outline" class="justify-center" @click="open = false" />
      </template>
    </RLDrawer>

    <RLDrawer should-scale-background title="Drawer with `should-scale-background`" description="You need to add the `data-vaul-drawer-wrapper` directive to your content to make it work." :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open with scale" />

      <template #body>
        <RLPlaceholder class="h-screen w-full" />
      </template>
    </RLDrawer>

    <RLDrawer title="Drawer with nested" :inset="inset" :ui="{ content: 'h-full' }" should-scale-background>
      <RLButton color="neutral" variant="outline" label="Open nested" />

      <template #footer>
        <RLDrawer :inset="inset" nested :ui="{ content: 'h-full' }">
          <RLButton color="neutral" variant="outline" label="Open nested" />

          <template #content>
            <RLPlaceholder class="flex-1 m-4" />
          </template>
        </RLDrawer>
      </template>
    </RLDrawer>

    <RLDrawer title="Drawer with bottom direction" direction="bottom" :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open on bottom" />

      <template #body>
        <RLPlaceholder class="h-96 w-full" />
      </template>
    </RLDrawer>

    <RLDrawer title="Drawer with left direction" direction="left" :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open on left" />

      <template #body>
        <RLPlaceholder class="w-96 h-full" />
      </template>
    </RLDrawer>

    <RLDrawer title="Drawer with top direction" direction="top" :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open on top" />

      <template #body>
        <RLPlaceholder class="h-96 w-full" />
      </template>
    </RLDrawer>

    <RLDrawer title="Drawer with right direction" direction="right" :inset="inset">
      <RLButton color="neutral" variant="outline" label="Open on right" />

      <template #body>
        <RLPlaceholder class="w-96 h-full" />
      </template>
    </RLDrawer>
  </div>
</template>
