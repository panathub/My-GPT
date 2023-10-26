<template>
  <dialog 
    class="modal modal-bottom sm:modal-middle"
    :class="{ 'modal-open':closeModal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="handleModal">✕</button>
          <button class="btn" @click="handleModal">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>

const props = defineProps(['closeModal', 'handleModal']);

</script>

<style lang="scss" scoped>
</style>