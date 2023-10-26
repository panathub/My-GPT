<template>
 
  <div class="w-screen h-screen overflow-hidden flex">
    <section>
      <Sidebar />
    </section>
    <section class="flex-1">
        <Navbar />
        <slot />
      </section>
  </div>
</template>

<script setup lang="ts">

</script>

