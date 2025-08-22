<template>
  <div class="flex flex-col gap-2">
    <RLTooltip text="Top" :kbds="['meta', 'T']" :content="{ side: 'top' }" arrow>
      <RLButton label="Top" color="neutral" variant="outline" block />
    </RLTooltip>

    <div class="grid grid-cols-2 gap-2">
      <RLTooltip text="Left" :kbds="['meta', 'L']" :content="{ side: 'left' }" arrow>
        <RLButton label="Left" color="neutral" variant="outline" block />
      </RLTooltip>

      <RLTooltip text="Right" :kbds="['meta', 'R']" :content="{ side: 'right' }" arrow>
        <RLButton label="Right" color="neutral" variant="outline" block />
      </RLTooltip>
    </div>

    <RLTooltip text="Bottom" :kbds="['meta', 'B']" arrow>
      <RLButton label="Bottom" color="neutral" variant="outline" block />
    </RLTooltip>
  </div>
</template>
