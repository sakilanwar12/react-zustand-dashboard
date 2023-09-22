import { create } from 'zustand'


const initialState = {
    toggleSettings: false,
    nav: 'static',
    footer: 'static-footer',
    sidebarToggle: false,
    contentWidth: "container-box"
}

const useStore = create(() => ({
    ...initialState,
}))


export default useStore;