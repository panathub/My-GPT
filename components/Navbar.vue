<template>
    <nav class="top-0 w-full shadow-md z-10 sticky bg-white dark:bg-gray-800">
        <div class="relative z-20 flex items-center justify-between min-h-[60px]">
            <div 
                class="flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"
                :class="close ? 'visible' : 'invisible pointer-events-none'">
                
                <VTooltip placement="right" :distance="20">
                    <button class="items-center p-2" @click="closeSideBar">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>
                </button>

                  <template #popper>
                    Open sidebar
                  </template>
               </VTooltip>
            </div>
            <div
                class="flex flex-1 flex-grow items-center gap-1 px-2 py-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0">
                <span class="text-sm">MON(GPT-3.5)</span>
            </div>

            <div
                class="flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11">
                <button class="tooltip tooltip-left items-center p-2" data-tip="Share chat" @click="handleModal">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    <Modal :closeModal="closeModal" :handleModal="handleModal"/>
</template>

<script setup>
const { close, closeSideBar } = useSidebar();

const closeModal = ref(false);

function handleModal() {
    closeModal.value = !closeModal.value;
}
</script>

<style lang="scss" scoped></style>
