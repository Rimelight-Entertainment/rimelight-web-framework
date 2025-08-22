<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="font-semibold text-highlighted">
        Nuxt UI
      </p>
      <p>An open-source UI component library.</p>
    </div>

    <RLSeparator icon="i-simple-icons-nuxtdotjs" type="dashed" />

    <div class="h-24 flex gap-4 items-center">
      <div class="flex-1 text-center">
        Blog
      </div>

      <RLSeparator
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        decorative
        orientation="vertical"
      />

      <div class="flex-1 text-center">
        Docs
      </div>

      <RLSeparator decorative orientation="vertical">
        <RLAvatar size="2xs" src="https://github.com/sandros94.png" />
      </RLSeparator>

      <div class="flex-1 text-center">
        Source
      </div>
    </div>

    <RLSeparator label="As simple as it gets" type="dotted" size="lg" color="primary" />
  </div>
</template>
