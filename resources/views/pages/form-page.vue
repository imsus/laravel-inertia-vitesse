<script setup lang="ts">
import type { Ref } from 'vue'
import BlankLayout from '~/views/layouts/blank-layout.vue'
import DefaultLayout from '~/views/layouts/default-layout.vue'

defineProps<{
  errors: Record<string, any> | null
}>()

defineOptions({
  layout: [BlankLayout, DefaultLayout],
})

const loginForm = useForm({
  email: '',
  password: '',
  remember: true,
})

const toast: Ref<string | null> = ref(null)

const submitLoginForm = () => {
  loginForm.clearErrors()

  if (loginForm.processing)
    loginForm.cancel()

  loginForm.post('/form', {
    preserveScroll: true,
    onSuccess: () => {
      toast.value = 'Login Successful'
    },
  })
}
</script>

<template>
  <div class="container mx-auto px-6 pt-6 pb-24">
    <h1 class="text-6xl font-bold">
      Form Page
    </h1>

    <div class="flex mt-12 flex gap-6 flex-wrap">
      <form class="flex-none max-w-sm w-full" @submit.prevent="submitLoginForm()">
        <fieldset class="grid gap-4 border p-6 flex-none">
          <legend class="flex px-3 py-1 border">
            <h2 class="text-2xl font-bold">
              Login Form
            </h2>
          </legend>
          <div>
            <label for="email" class="block text-lg">Email</label>
            <div v-if="loginForm.errors?.email" class="my-1 font-medium text-red-600 dark:text-red-300">
              {{ loginForm.errors?.email }}
            </div>
            <input id="email" v-model="loginForm.email" class="mt-1 w-full" :class="[loginForm.errors?.email ? 'outline outline-red-700 dark:outline-red-200 border-red-700 dark:border-red-200' : '']" type="email">
          </div>
          <div>
            <label for="password" class="block text-lg">Password</label>
            <div v-if="loginForm.errors?.password" class="my-1 font-medium text-red-600 dark:text-red-300">
              {{ loginForm.errors?.password }}
            </div>
            <input id="password" v-model="loginForm.password" class="mt-1 w-full" :class="[loginForm.errors?.password ? 'outline outline-red-700 dark:outline-red-200 border-red-700 dark:border-red-200' : '']" type="password">
          </div>
          <div class="flex items-center gap-2">
            <input id="remember" v-model="loginForm.remember" type="checkbox">
            <label for="remember">Remember me</label>
          </div>
          <button
            class="inline-flex items-center justify-center border h-12 font-medium bg-green-700 hover:bg-green-900 text-white border-transparent active:translate-y-[0.25rem]"
            :class="[loginForm.processing ? 'w-14' : 'w-fit px-6']"
          >
            <i v-if="loginForm.processing" class="i-ph-spinner-gap animate-spin h-6 w-6" />
            <span v-else>Submit</span>
          </button>
        </fieldset>
      </form>

      <div class="flex-auto">
        <pre wrap>{{ loginForm }}</pre>
      </div>

      <teleport to="#overlay-container">
        <div v-if="loginForm.recentlySuccessful" class="fixed bottom-6 md:top-20 md:bottom-auto left-0 right-0 flex justify-center px-4">
          <div class="bg-black text-white dark:(bg-white text-black) px-6 py-3 inline-flex items-center rounded">
            {{ toast }}
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>
