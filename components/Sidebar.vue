<template>
<div>
   <aside id="default-sidebar" 
      class="overflow-hidden top-0 left-0 z-40 h-screen transition-all duration-300"
      :class="close ? 'w-0' : 'w-[260px]'"
      >
      <div class="w-[260px] h-full px-2 py-2 overflow-y-auto bg-[#202123]">
            <div class="flex gap-2 text-white text-sm">
               <div class="items-center p-3 rounded-lg border border-gray-500 w-full">
                  <Icon name="ep:plus" color="white" />
                  <span class="ml-3">New Chat</span>
               </div>
               <button @click="closeSideBar" class="items-center p-3 rounded-lg border border-gray-500">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
               </button>
            </div>
            <div class="flex-col flex-1 overflow-y-auto border-b border-white/20">
            </div>
            <div>
            </div>
      </div>
   </aside>
</div>


</template>

<script setup>

const props = defineProps(['close', 'closeSideBar'])
console.log(props.close)
</script>

<style lang="sass" scoped>

</style>