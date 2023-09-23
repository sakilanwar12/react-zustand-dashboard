import { create } from 'zustand'


const initialState = {
    toggleSettings: false,
    nav: 'static',
    theme: "light",
    semi_dark: false,
    footer: 'static-footer',
    sidebarToggle: false,
    contentWidth: "container-box",
    skin_bordered: "skin_default"
}

const useStore = create(() => ({
    ...initialState,
}))


export default useStore;