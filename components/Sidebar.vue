<template>
   <div>
      <aside id="default-sidebar" class="overflow-x-hidden top-0 left-0 z-40 h-screen transition-all duration-300"
         :class="close ? 'w-0' : 'w-[260px]'">
         <div class="w-[260px] h-full px-2 py-2 overflow-x-hidden bg-[#202123] flex flex-col justify-between">
            <div class="flex gap-2 text-white text-sm">
               <button class="text-left p-3 rounded-lg border border-gray-500 w-full">
                  <Icon name="ep:plus" color="white" />
                  <span class="ml-3">New Chat</span>
               </button>
               <VTooltip placement="right" :distance="25">
                  <button class="flex justify-center items-center rounded-lg border border-gray-500 w-[46px] h-[46px]" @click="closeSideBar">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                     </svg>
                  </button>

                  <template #popper>
                     Close sidebar
                  </template>
               </VTooltip>
            </div>
            <div class="overflow-auto custom-scroll">
               <div v-for="(foo, index) in foos" :key="index" class="flex flex-col gap-2 text-white text-sm my-4">
                  <button class="text-left p-3 rounded-lg w-full hover:bg-gray-700">
                     <Icon name="ic:baseline-chat-bubble-outline" color="white" />
                     <span class="ml-3">New Chat</span>
                  </button>
               </div>
            </div>
            <div class="text-white text-sm dropdown dropdown-top border-t border-gray-500">
               <button class="text-left p-3 rounded-lg border-gray-500  hover:bg-gray-700 w-full">
                  <div class="avatar placeholder gap-3">
                     <div class="bg-pink-700 text-neutral-content rounded-full w-10">
                        <span>P</span>
                     </div>
                     <span class="my-auto">Panat Bangsang-oon</span>
                  </div>
                  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-white bg-black">
                     <li><a>Item 1</a></li>
                     <li><a>Item 2</a></li>
                  </ul>
               </button>
            </div>
         </div>
      </aside>
   </div>
</template>

<script setup>
const { close, closeSideBar } = useSidebar();
const foos = ref(20);
const focused = ref(false);

</script>

<style lang="sass" scoped></style>
