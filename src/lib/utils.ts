export function RoundToEven(n: number): number {
    let rounded = Math.floor(n + 0.5);

    if (rounded % 2 !== 0 && n % 1 === 0.5)
        rounded++;

    return rounded;
}

import { mount, unmount, type Component } from "svelte";

// workaround used to utilize svelte components with the tooltip plugin
// I tried but the plugin appears to only accept string values for its content parameter. (beta branch for Svelte 5)
export function ConvertSvelteComponentToRawHTML<Props extends Record<string, any>>(
    component: Component<Props>,
    props: Props
) {
    const target = document.createElement('div');
    const instance = mount(component, { target, props, });
    const html = target.innerHTML;
    unmount(instance);
    return html;
}