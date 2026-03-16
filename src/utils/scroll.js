export function scrollToTop(behavior = 'auto') {
    window.scrollTo({ top: 0, behavior });
}

export function scrollToSelector(selector, behavior = 'smooth') {
    document.querySelector(selector)?.scrollIntoView({ behavior });
}
