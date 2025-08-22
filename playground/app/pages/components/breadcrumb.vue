<script setup lang="ts">
const items = [{
  label: 'Home',
  to: '/'
}, {
  slot: 'dropdown' as const,
  icon: 'i-lucide-ellipsis',
  children: [{
    label: 'Documentation'
  }, {
    label: 'Themes'
  }, {
    label: 'GitHub'
  }]
}, {
  label: 'Components',
  disabled: true
}, {
  label: 'Breadcrumb',
  to: '/components/breadcrumb'
}]
</script>

<template>
  <RLBreadcrumb :items="items">
    <template #dropdown="{ item }">
      <RLDropdownMenu :items="item.children">
        <RLButton :icon="item.icon" color="neutral" variant="link" class="p-0.5" />
      </RLDropdownMenu>
    </template>
  </RLBreadcrumb>
</template>
