import { create } from 'zustand'

const initialState = {
    toggleSettings: false,
    nav: 'static',
    footer: 'static-footer',
    sidebarToggle: false,
    contentWidth: "container-box"
}

const useStore = create((set) => ({
    ...initialState,

    // toggle Settings
    setToggleSettings: () => set((state) => ({ toggleSettings: !state.toggleSettings })),

    // navbar
    setNav: (navStyle) => set(() => ({ nav: navStyle })),

    // footer
    setFooter: (footerStyle) => set(() => ({ footer: footerStyle })),
    // sidebar
    setSidebarToggle: () => set((state) => ({ sidebarToggle: !state.sidebarToggle })),

    // content width
    setContainer: (container) => set(() => ({ contentWidth: container }))
 
}))

export default useStore;