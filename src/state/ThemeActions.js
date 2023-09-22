import useStore from "./store"

export const setToggleSettings = () => {
    useStore.setState(state => ({ toggleSettings: !state.toggleSettings }))
}

export const setNav = (navStyle) => {
    useStore.setState(() => ({ nav: navStyle }))
}

export const setFooter = (footerStyle) => {
    useStore.setState(() => ({ footer: footerStyle }))
}
export const setSidebarToggle = () => {
    useStore.setState(state => ({ sidebarToggle: !state.sidebarToggle }))
}
export const setContainer = (container) => {
    useStore.setState(() => ({ contentWidth: container }))
}
