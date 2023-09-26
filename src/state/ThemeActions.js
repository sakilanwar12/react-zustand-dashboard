import useStore from "./store"

export const setOpenSettings = () => {
    useStore.setState(state => ({ settingsOpen: !state.settingsOpen }))
}

export const setNav = (navStyle) => {
    useStore.setState(() => ({ nav: navStyle }))
}

export const setFooter = (footerStyle) => {
    useStore.setState(() => ({ footer: footerStyle }))
}
export const setMenuHidden = () => {
    useStore.setState(state => ({ menuHidden: !state.menuHidden }))
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