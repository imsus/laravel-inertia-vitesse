<template>
  <div>
    <div class="border-b">
      <div class="container mx-auto flex justify-between px-6 h-16 items-center">
        <InertiaLink class="border h-10 px-6 items-center inline-flex font-bold uppercase tracking-widest hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/">
          Logo
        </InertiaLink>
        <DarkModeToggler class="border h-10 pl-4 pr-3 items-center inline-flex font-medium" />
      </div>
    </div>
    <slot />
  </div>
</template>
