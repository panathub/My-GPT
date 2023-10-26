export const useSidebar = () => {
    const close = useState<boolean>('close', () => false)

    const closeSideBar = () => {
        close.value = !close.value
     }

     return { close, closeSideBar }
}

