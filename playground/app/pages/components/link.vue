<template>
  <div class="flex items-center gap-4">
    <div class="flex flex-col items-start gap-2 text-sm">
      <RLLink raw>
        Button raw
      </RLLink>

      <RLLink active>
        Button active
      </RLLink>
      <RLLink active class="font-medium" active-class="text-highlighted">
        Button active with class
      </RLLink>
      <RLLink active disabled>
        Button active disabled
      </RLLink>

      <RLLink>
        Button inactive
      </RLLink>
      <RLLink class="font-medium" inactive-class="hover:text-primary">
        Button inactive with class
      </RLLink>
      <RLLink disabled>
        Button inactive disabled
      </RLLink>
    </div>

    <div class="flex flex-col items-start gap-2 text-sm">
      <RLLink to="/components/link" raw>
        Link raw
      </RLLink>

      <RLLink to="/components/link">
        Link active
      </RLLink>
      <RLLink to="/components/link" class="font-medium" active-class="text-highlighted">
        Link active with class
      </RLLink>
      <RLLink to="/components/link" disabled>
        Link active disabled
      </RLLink>

      <RLLink to="/components/button">
        Link inactive
      </RLLink>
      <RLLink to="/components/button" class="font-medium" inactive-class="hover:text-primary">
        Link inactive with class
      </RLLink>
      <RLLink to="/components/button" disabled>
        Link inactive disabled
      </RLLink>
    </div>
  </div>
</template>
