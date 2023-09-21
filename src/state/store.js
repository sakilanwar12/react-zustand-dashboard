import { create } from 'zustand'

const useStore = create((set) => ({
    toggleSettings: false,
    nav: 'static',
    footer: 'static-footer',
    sidebarToggle: false,
    contentWidth: "container-box",
    setToggleSettings: () => set((state) => ({ toggleSettings: !state.toggleSettings })),

    // navbar

    setNavSticky: () => set(() => ({ nav: "sticky-menu" })),
    setNavStatic: () => set(() => ({ nav: "static-menu" })),
    setNavHidden: () => set(() => ({ nav: "hidden-menu" })),

    // footer

    setFooterSticky: () => set(() => ({ footer: "sticky-footer" })),
    setFooterStatic: () => set(() => ({ footer: "static-footer" })),
    setFooterHidden: () => set(() => ({ footer: "hidden-footer" })),

    // sidebar

    setSidebarToggle: () => set((state) => ({ sidebarToggle: !state.sidebarToggle })),

    // content width

    setFullContentWidth: () => set(() => ({ contentWidth: "container-full" })),
    setBoxContentWidth: () => set(() => ({ contentWidth: "container-box" }))

}))

export default useStore;