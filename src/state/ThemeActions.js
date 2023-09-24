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
export const setTheme = (theme) => {
    useStore.setState(() => ({ theme: theme }))
}
export const setSemiDark = () => {
    useStore.setState(state => ({ semi_dark: !state.semi_dark }))
}
export const setSkin = (skin) => {
    useStore.setState(() => ({ skin_bordered: skin }))
}
export const setGrayScale = () => {
    useStore.setState(state => ({ grayscale: !state.grayscale }))
}