export const createStyleLink = (href: string): HTMLLinkElement => {
    const link: HTMLLinkElement = document.createElement<'link'>("link");
    link.href = href;
    link.rel= "stylesheet"
    return link
};
