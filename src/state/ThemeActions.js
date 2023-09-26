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
export const setShoppingCart = () => {
    useStore.setState(state => ({ shoppingCart: !state.shoppingCart }))
}
export const setOpenInbox = () => {
    useStore.setState(state => ({ openInbox: !state.openInbox }))
}
export const setOpenNotificationsBox = () => {
    useStore.setState(state => ({ openNotification: !state.openNotification }))
}
export const setOpenAuthorMenu = () => {
    useStore.setState(state => ({ openAuthorMenu: !state.openAuthorMenu }))
}