<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@rimelight/rimelight-web-framework'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  tos: z.literal(true)
})

type Schema = z.input<typeof schema>

const state = reactive<Partial<Schema>>({})

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}

const validateOn = ref(['input', 'change', 'blur'])
const disabled = ref(false)
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-4">
      <RLForm
        :state="state"
        :schema="schema"
        class="gap-4 flex flex-col w-60"
        @submit="onSubmit"
      >
        <RLFormField label="Email" name="email">
          <RLInput v-model="state.email" placeholder="john@lennon.com" />
        </RLFormField>

        <RLFormField label="Password" name="password">
          <RLInput v-model="state.password" type="password" />
        </RLFormField>

        <RLFormField name="tos">
          <RLCheckbox v-model="state.tos" label="I accept the terms and conditions" />
        </RLFormField>

        <div>
          <RLButton type="submit">
            Submit
          </RLButton>
        </div>
      </RLForm>
      <FormExampleNested />
      <FormExampleNestedList />
    </div>

    <div class="border border-default rounded-lg">
      <div class="py-2 px-4 flex gap-4 items-center">
        <RLFormField label="Validate on" class="flex items-center gap-2">
          <RLSelectMenu v-model="validateOn" :items="['input', 'change', 'blur']" multiple class="w-48" />
        </RLFormField>
        <RLCheckbox v-model="disabled" label="Disabled" />
      </div>

      <FormExampleElements :validate-on="validateOn" :disabled="disabled" class="border-t border-default p-4" />
    </div>
  </div>
</template>
