<template>
 
  <div class="w-screen h-screen overflow-hidden flex">
    <section>
      <Sidebar :close=close :closeSideBar=closeSideBar />
    </section>
    <section class="flex-1">
        <Navbar :close=close :closeSideBar=closeSideBar />
        <slot />
      </section>
  </div>
  <Modal />
</template>

<script setup>
const close = ref(false)

function closeSideBar() {
   close.value = !close.value
   console.log('click', close.value)
}
</script>

